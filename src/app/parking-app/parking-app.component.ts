import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehicleFormComponent } from '../components/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from '../components/vehicle-list/vehicle-list.component';
import { VehicleExitComponent} from '../components/vehicle-exit/vehicle-exit.component';
import { EarningsBannerComponent } from '../components/earnings-banner/earnings-banner.component';
import { CloseDayCardComponent } from '../components/close-day/close-day.component';

@Component({
  selector: 'app-parking-app',
  standalone: true,
  imports: [CommonModule, FormsModule, VehicleFormComponent, VehicleListComponent, VehicleExitComponent, EarningsBannerComponent, CloseDayCardComponent],
  templateUrl: './parking-app.component.html',
  styleUrls: ['./parking-app.component.css'],
})
export class ParkingAppComponent {}