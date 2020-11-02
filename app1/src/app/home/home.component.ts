import { Component, OnInit } from '@angular/core';

import eData from 'src/assets/Employees.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Users: any =eData;
  constructor() { }

  ngOnInit() {
    console.log (eData);
  }

}
