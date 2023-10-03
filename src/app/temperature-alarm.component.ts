import { Component, OnInit } from '@angular/core';
import { TemperatureEvent } from './temperature.event';
import { TemperatureSensorService } from './temperature-sensor.service';

@Component({
  selector: 'app-temperature-alarm',
  template: '<div>{{ warningMessage }}</div>',
})
export class TemperatureAlarmComponent implements OnInit {
  warningMessage = '';

  constructor(private temperatureSensorService: TemperatureSensorService) {}

  ngOnInit() {
    this.temperatureSensorService
      .getTemperatureEvents()
      .subscribe((temperatureEvent: TemperatureEvent) => {
        this.warningMessage =
          'Warning! High temperature detected: ' +
          temperatureEvent.temperature +
          '°C';
      });
  }
}