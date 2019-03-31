import { Injectable } from '@angular/core';
import { SWPEOPLE } from './mock-swpeople';
import { Swpeople } from './swpeople';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class SwpeopleService {

  constructor(private messageService: MessageService) { }

  getSwPeople(): Observable<Swpeople[]>{
    this.messageService.add('SwpeopleService: fetched Swpeople');
    return of(SWPEOPLE);
  }

}
