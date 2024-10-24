import { TestBed } from '@angular/core/testing';

import { TravelUserService } from './travel-user.service';

describe('TravelUserService', () => {
  let service: TravelUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
