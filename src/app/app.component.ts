import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingAppComponent } from './parking-app/parking-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ParkingAppComponent],
  template: `<app-parking-app></app-parking-app>`,
})
export class AppComponent {}