import { TestBed } from '@angular/core/testing';

import { CanShowService } from './can-show.service';

describe('CanShowService', () => {
  let service: CanShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
