import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TemperatureEvent } from './temperature.event';

@Injectable({
  providedIn: 'root',
})
export class TemperatureSensorService {
  private temperatureEventsSubject = new Subject<TemperatureEvent>();

  constructor() {
    setInterval(() => {
      const temperature = Math.random() * 50; // Generate random temperature between 0°C and 50°C
      if (temperature > 30) {
        const temperatureEvent = new TemperatureEvent(temperature);
        this.temperatureEventsSubject.next(temperatureEvent);
      }
    }, 3000); // Generate a temperature reading every 3 seconds
  }

  getTemperatureEvents(): Observable<TemperatureEvent> {
    return this.temperatureEventsSubject.asObservable();
  }
}