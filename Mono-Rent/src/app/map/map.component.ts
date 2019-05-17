import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 45.4654219;
  lng= 9.1859243;

    constructor(public http: HttpClient) {
    this.findMe();
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
}
