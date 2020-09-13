import { TestBed } from '@angular/core/testing';

import { ConsumogitService } from './consumogit.service';

describe('ConsumogitService', () => {
  let service: ConsumogitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumogitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
