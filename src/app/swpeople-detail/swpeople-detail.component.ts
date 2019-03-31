import { Component, OnInit, Input } from '@angular/core';
import { Swpeople } from '../swpeople';

@Component({
  selector: 'app-swpeople-detail',
  templateUrl: './swpeople-detail.component.html',
  styleUrls: ['./swpeople-detail.component.css']
})
export class SwpeopleDetailComponent implements OnInit {

  @Input() swpeople: Swpeople;

  constructor() {}

  ngOnInit() {
  }

}
