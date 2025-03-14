import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParkingLogicService, Vehicle} from '../../services/parking-logic.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true, // Asegúrate de que el componente es standalone
  imports: [FormsModule, CommonModule], // Importar NgFor y DatePipe
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})

export class VehicleListComponent implements OnInit {
  vehicles: any[] = [];
  vehicleToEdit: Vehicle | null = null;
  vehicleToDelete: Vehicle | null = null;

  constructor(
    private parkingLogic: ParkingLogicService,
    private translationService: TranslationService // Inyectamos el servicio de traducción
  ) {}

  ngOnInit(): void {
    this.vehicles = this.parkingLogic.getVehicles();
    console.log('Vehículos:', this.vehicles);
  }

  // Método para traducir los tipos de vehículo
  translateVehicleType(type: 'motorcycle' | 'lightCar'): string {
    return this.translationService.translateVehicleType(type);
  }

  // Abrir el modal de edición
  openEditModal(vehicle: Vehicle): void {
    this.vehicleToEdit = { ...vehicle }; 
  }

  // Cerrar el modal de edición
  closeEditModal(): void {
    this.vehicleToEdit = null;
  }

  // Actualizar el vehículo
  updateVehicle(): void {
    if (this.vehicleToEdit) {
      this.parkingLogic.updateVehicle(this.vehicleToEdit.plate, this.vehicleToEdit); // Actualizar el vehículo
      this.vehicles = this.parkingLogic.getVehicles(); // Refrescar la lista
      this.closeEditModal(); // Cerrar el modal
    }
  }
  
  // Abre el modal de confirmación para eliminar
  openDeleteModal(vehicle: Vehicle): void {
    this.vehicleToDelete = vehicle;
  }

  // Confirma la eliminación
  confirmDelete(): void {
    if (this.vehicleToDelete) {
      this.parkingLogic.deleteVehicle(this.vehicleToDelete.plate);
      this.vehicleToDelete = null;
      this.vehicles = this.parkingLogic.getVehicles(); // Actualiza la lista
    }
  }
}