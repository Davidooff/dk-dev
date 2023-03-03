import { TestBed } from '@angular/core/testing';

import { CallSectionFormServiceService } from './call-section-form-service.service';

describe('CallSectionFormServiceService', () => {
  let service: CallSectionFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallSectionFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
