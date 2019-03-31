import { TestBed } from '@angular/core/testing';

import { SwpeopleService } from './swpeople.service';

describe('SwpeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwpeopleService = TestBed.get(SwpeopleService);
    expect(service).toBeTruthy();
  });
});
