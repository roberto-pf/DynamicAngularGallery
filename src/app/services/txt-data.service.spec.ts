import { TestBed } from '@angular/core/testing';

import { TxtDataService } from './txt-data.service';

describe('TxtDataService', () => {
  let service: TxtDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TxtDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
