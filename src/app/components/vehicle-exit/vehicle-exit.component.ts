import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParkingLogicService } from '../../services/parking-logic.service';

@Component({
  selector: 'app-vehicle-exit',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule, FormsModule], // Importa los módulos necesarios
  templateUrl: './vehicle-exit.component.html',
})
export class VehicleExitComponent {
  plate = ''; // Placa del vehículo
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
    this.parkingLogic.registerExit(this.plate);
    this.plate = ''; // Limpiar el campo de la placa
    this.closeModal(); // Cerrar el modal después de enviar
  }
}