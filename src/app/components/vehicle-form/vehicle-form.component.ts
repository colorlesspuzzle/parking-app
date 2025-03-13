import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParkingLogicService } from '../../services/parking-logic.service';

@Component({
  selector: 'app-vehicle-form',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule, FormsModule], // Importa los módulos necesarios
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
})
export class VehicleFormComponent {
  vehicle = { 
    plate: '', 
    type: 'motorcycle', // Cambiado a 'motorcycle' o 'lightCar'
    ecoDiscount: false, 
    entryTime: new Date().toLocaleTimeString(), // Hora de ingreso actual
    exitTime: undefined, // Hora de salida (undefined cuando está en el parqueadero)
    isParked: true // Por defecto, el vehículo está en el parqueadero
  }; // Datos del vehículo

  isModalOpen = false; // Controla la visibilidad del modal

  constructor(private parkingLogic: ParkingLogicService) {}

  // Método para abrir el modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Método para cerrar el modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    this.parkingLogic.addVehicle(this.vehicle);
    this.vehicle = { 
      plate: '', 
      type: 'motorcycle', // Cambiado a 'motorcycle' o 'lightCar'
      ecoDiscount: false, 
      entryTime: new Date().toLocaleTimeString(), // Reinicia la hora de ingreso
      exitTime: undefined, // Reinicia la hora de salida
      isParked: true // Reinicia el estado del vehículo
    }; // Limpiar el formulario
    this.closeModal(); // Cerrar el modal después de enviar
  }
}