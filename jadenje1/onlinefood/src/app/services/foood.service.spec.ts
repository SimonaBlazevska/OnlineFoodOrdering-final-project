import { TestBed } from '@angular/core/testing';

import { FooodService } from './foood.service';

describe('FooodService', () => {
  let service: FooodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
