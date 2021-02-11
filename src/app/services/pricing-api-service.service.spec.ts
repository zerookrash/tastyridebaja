import { TestBed } from '@angular/core/testing';

import { PricingApiServiceService } from './pricing-api-service.service';

describe('PricingApiServiceService', () => {
  let service: PricingApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricingApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
