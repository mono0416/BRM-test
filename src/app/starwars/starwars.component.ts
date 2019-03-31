import { Component, OnInit } from '@angular/core';
import {Swpeople} from '../swpeople';
import {SWPEOPLE} from '../mock-swpeople';



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

  selectSwpeople: Swpeople;

  swpeople = SWPEOPLE;


  onSelecteswpeople(swpeople: Swpeople): void {
    alert(this.selectSwpeople)
    this.selectSwpeople = swpeople;
    console.log(this.selectSwpeople)
  }

  constructor() { }

  ngOnInit() {
  }

}
