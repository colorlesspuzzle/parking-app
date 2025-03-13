import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Disponible en toda la aplicación
})
export class TranslationService {
  // Método para traducir los tipos de vehículo
  translateVehicleType(type: 'motorcycle' | 'lightCar'): string {
    switch (type) {
      case 'motorcycle':
        return 'Moto';
      case 'lightCar':
        return 'Carro Ligero';
      default:
        return 'Desconocido';
    }
  }
}