import { Component, OnInit } from '@angular/core';

import { TemperatureEvent } from './temperature.event';

import { TemperatureSensorService } from './temperature-sensor.service';

 

@Component({

  selector: 'app-temperature-alarm',

  template: `

    <div [style.background]="'red'">

      Temperature: {{ temperature }}°C<br>{{ warningMessage }}

    </div>

  `,

})

export class TemperatureAlarmComponent implements OnInit {

  temperature = 0;

  warningMessage = '';

 

  constructor(private temperatureSensorService: TemperatureSensorService) {}

 

  ngOnInit() {

    this.temperatureSensorService

      .getTemperatureEvents()

      .subscribe((temperatureEvent: TemperatureEvent) => {

        this.temperature = temperatureEvent.temperature;

        this.warningMessage =

          'Warning! High temperature detected: ' +

          this.temperature +

          '°C';

      });

  }

}