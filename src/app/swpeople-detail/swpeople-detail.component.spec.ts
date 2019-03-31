import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwpeopleDetailComponent } from './swpeople-detail.component';

describe('SwpeopleDetailComponent', () => {
  let component: SwpeopleDetailComponent;
  let fixture: ComponentFixture<SwpeopleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwpeopleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwpeopleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
