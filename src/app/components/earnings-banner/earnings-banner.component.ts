import { Component } from '@angular/core';
import { ParkingLogicService } from '../../services/parking-logic.service';

@Component({
  selector: 'app-earnings-banner',
  standalone: true,
  templateUrl: './earnings-banner.component.html',
})
export class EarningsBannerComponent {
  constructor(private parkingLogic: ParkingLogicService) {}

  // Método para obtener las ganancias actuales
  getTotalEarnings(): number {
    return this.parkingLogic.getTotalEarnings();
  }
}