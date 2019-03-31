import { Component, OnInit } from '@angular/core';
import {Swpeople} from '../swpeople';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {
  diana :Swpeople={
    name:'avila',
    gender:'femenino'
  }

  constructor() { }

  ngOnInit() {
  }

}
