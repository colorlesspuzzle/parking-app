import { Injectable } from '@angular/core';

// Definimos la interfaz Vehicle dentro del servicio
interface Vehicle {
  plate: string;
  type: 'motorcycle' | 'lightCar';
  ecoDiscount: boolean;
  entryTime: string; 
  exitTime?: string; 
  isParked: boolean; 
  assignedSpot?: number; 
}

@Injectable({
  providedIn: 'root',
})
export class ParkingLogicService {
  private vehicles: Vehicle[] = []; // Lista de vehículos
  private availableMotorcycleSpots: number[] = [1, 2, 3, 4, 5, 6]; // Plazas para motocicletas
  private availableCarSpots: number[] = [1, 2, 3, 4, 5]; // Plazas para vehículos ligeros
  private totalEarnings: number = 0; // Ganancias totales

  constructor() {}

  // Método para obtener la lista de vehículos
  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  // Método para agregar un vehículo
  addVehicle(vehicle: Vehicle): boolean {
    if (vehicle.type === 'motorcycle' && this.availableMotorcycleSpots.length > 0) {
      vehicle.assignedSpot = this.availableMotorcycleSpots.shift(); // Asigna una plaza
    } else if (vehicle.type === 'lightCar' && this.availableCarSpots.length > 0) {
      vehicle.assignedSpot = this.availableCarSpots.shift(); // Asigna una plaza
    } else {
      return false; // No hay plazas disponibles
    }
 
    vehicle.isParked = true;
    vehicle.entryTime = new Date().toLocaleTimeString(); // Registra la hora de ingreso
    this.vehicles.push(vehicle);
    return true;
  }

  // Método para actualizar un vehículo
  updateVehicle(plate: string, updatedVehicle: Vehicle): void {
    const index = this.vehicles.findIndex((v) => v.plate === plate);
    if (index !== -1) {
      this.vehicles[index] = updatedVehicle;
    }
  }

  // Método para eliminar un vehículo
  deleteVehicle(plate: string): void {
    this.vehicles = this.vehicles.filter((v) => v.plate !== plate);
  }

  // Método para registrar la salida de un vehículo y calcular el cobro
  registerExit(plate: string): void {
    const vehicle = this.vehicles.find((v) => v.plate === plate);
    if (vehicle) {
      vehicle.exitTime = new Date().toLocaleTimeString(); // Registra la hora de salida
      vehicle.isParked = false;

      // Calcula el cobro y lo suma a las ganancias totales
      const charge = this.calculateCharge(vehicle);
      this.totalEarnings += charge;

      // Libera la plaza asignada
      if (vehicle.type === 'motorcycle') {
        this.availableMotorcycleSpots.push(vehicle.assignedSpot!);
      } else if (vehicle.type === 'lightCar') {
        this.availableCarSpots.push(vehicle.assignedSpot!);
      }
    }
  }
  
  // Método para calcular el cobro de un vehículo
  private calculateCharge(vehicle: Vehicle): number {
    const entryTime = new Date(`01/01/2000 ${vehicle.entryTime}`);
    const exitTime = new Date(`01/01/2000 ${vehicle.exitTime}`);
    const hoursParked = (exitTime.getTime() - entryTime.getTime()) / (1000 * 60 * 60);

    let cost = vehicle.type === 'motorcycle' ? 62 : 120;
    if (vehicle.ecoDiscount) {
      cost *= 0.75; // Aplica descuento del 25%
    }

    return cost * hoursParked;
  }
  
  // Método para obtener las ganancias totales
  getTotalEarnings(): number {
    return this.totalEarnings;
  }

  // Método para forzar la salida de todos los vehículos
  forceExitAllVehicles(): void {
    this.vehicles.forEach((vehicle) => {
      if (vehicle.isParked) {
        this.registerExit(vehicle.plate);
      }
    });
  }
}