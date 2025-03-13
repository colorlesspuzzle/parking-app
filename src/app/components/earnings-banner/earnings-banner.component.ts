import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingLogicService } from '../../services/parking-logic.service';

@Component({
  selector: 'app-earnings-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './earnings-banner.component.html',
})

export class EarningsBannerComponent {
  constructor(private parkingLogic: ParkingLogicService) {}

  // Método para obtener las ganancias actuales
  getTotalEarnings(): number {
    return this.parkingLogic.getTotalEarnings();
  }
}