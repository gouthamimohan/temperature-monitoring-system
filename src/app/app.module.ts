import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemperatureAlarmComponent } from './temperature-alarm.component';
import { TemperatureSensorService } from './temperature-sensor.service';

@NgModule({
  declarations: [AppComponent, TemperatureAlarmComponent],
  imports: [BrowserModule],
  providers: [TemperatureSensorService],
  bootstrap: [AppComponent],
})
export class AppModule {}


