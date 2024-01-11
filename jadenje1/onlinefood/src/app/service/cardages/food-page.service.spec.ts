import { TestBed } from '@angular/core/testing';

import { FoodPageService } from './food-page.service';

describe('FoodPageService', () => {
  let service: FoodPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
