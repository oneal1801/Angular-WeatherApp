import { Component, OnInit } from '@angular/core';
import { CityDto } from './models/city.dto';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  cityName: string = 'Santo Domingo';
  stateName: string = '';
  countryName: string = '';
  cityNameLabel: string = '';
  city: CityDto = {
    cityName: this.cityName,
    stateName: this.stateName,
    countryName: this.countryName,
  };

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.cityNameLabel = this.city.cityName;
    this.city.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.city);
    this.cityNameLabel = this.city.cityName;
    this.city.cityName = '';
  }

  private getWeatherData(requestCity: CityDto) {
    this.weatherService.getWeatherData(requestCity).subscribe({
      next: (res) => {
        this.weatherData = res;
        console.log(this.weatherData);
      },
    });
  }
}
