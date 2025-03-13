import { Component } from '@angular/core';
import { ParkingLogicService } from '../../services/parking-logic.service';

@Component({
  selector: 'app-close-day-card',
  standalone: true,
  templateUrl: './close-day-card.component.html',
})
export class CloseDayCardComponent {
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

  // Método para generar el cierre del día
  closeDay(): void {
    this.parkingLogic.forceExitAllVehicles(); // Forza la salida de todos los vehículos
    this.closeModal(); // Cierra el modal
  }
}