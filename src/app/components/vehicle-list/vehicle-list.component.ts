import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParkingLogicService } from '../../services/parking-logic.service';
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
  vehicleToEdit: any = null; // Vehículo que se está editando

  constructor(
    private parkingLogic: ParkingLogicService,
    private translationService: TranslationService // Inyectamos el servicio de traducción
  ) {
    this.vehicles = this.parkingLogic.getVehicles();
  }

  ngOnInit(): void {
    this.vehicles = this.parkingLogic.getVehicles();
    console.log('Vehículos:', this.vehicles);
  }

  // Abrir el modal de edición
  openEditModal(vehicle: any): void {
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

  // Eliminar un vehículo
  deleteVehicle(plate: string): void {
    this.parkingLogic.deleteVehicle(plate);
    this.vehicles = this.parkingLogic.getVehicles(); // Actualizar
  }
}