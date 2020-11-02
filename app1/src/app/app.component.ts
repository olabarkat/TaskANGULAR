import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as data from '../assets/Employees.json';
import eData from '../assets/Employees.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  Users: any =eData;
  emp: any = (data as any);

  constructor(){}
  ngOnInit(){
    console.log(data);
    this.emp=data;
    console.log(this.emp)
  }
}