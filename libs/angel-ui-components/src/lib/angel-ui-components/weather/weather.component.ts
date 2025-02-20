import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  city: string;
  country: string;
}

@Component({
  selector: 'lib-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})


export class WeatherComponent implements OnInit {
  weather: WeatherData | undefined;

  ngOnInit() {
    // Datos simulados
    this.weather = {
      temperature: 22,
      condition: 'Soleado',
      icon: '☀️',
      city: 'León',
      country: 'España'
    };
  }
}

