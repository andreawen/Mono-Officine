import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 45.283828;
  lng: number = 9.105340;
  constructor() { }

  ngOnInit() {
  }

}
