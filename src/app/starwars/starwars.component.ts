import { Component, OnInit } from '@angular/core';
import { Swpeople } from '../swpeople';
import { SwpeopleService } from '../swpeople.service';


@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  selectSwpeople: Swpeople;
  swpeople: Swpeople[];

  constructor(private swpeopleService: SwpeopleService) { }

  ngOnInit() {
    this.getSwpeople();
  }

  onSelecteswpeople(swpeople: Swpeople): void {
    this.selectSwpeople = swpeople;
  }

  getSwpeople(): void{
    this.swpeopleService.getSwPeople()
      .subscribe(swpeople => this.swpeople = swpeople);
  }


}
