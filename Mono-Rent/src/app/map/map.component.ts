import { Component, OnInit } from '@angular/core';
import { Coordinate } from './coordinate.model';
import { Monopattino } from './monopattino.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 45.4654219;
  lng= 9.1859243;
  o: Observable<Object>;
  mono: Observable<Monopattino[]>;
  monoPa: Monopattino[] = [];

    constructor(public http: HttpClient) {
    this.findMe();
    this.invioPosizione();
  }

  ngOnInit() {
  }

  findMe() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log("Coordinate: " + this.lat + ", " + this.lng);
      });
  }

  invioPosizione(): void {
    this.mono = this.http.get<Monopattino[]>('http://node25.codenvy.io:33765/coordinate');
    this.mono.subscribe(data => {
        console.log(data);
    });
  }
}

