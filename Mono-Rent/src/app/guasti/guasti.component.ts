import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guasti',
  templateUrl: './guasti.component.html',
  styleUrls: ['./guasti.component.css']
})
export class GuastiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openForm() {
  document.getElementById("myForm").style.display = "block";
  }
  closeForm() {
  document.getElementById("myForm").style.display = "none";
  }
}
