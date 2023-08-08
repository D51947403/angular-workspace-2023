import { TestBed } from '@angular/core/testing';

import { UpperCaseConverterService } from './upper-case-converter.service';

describe('UpperCaseConverterService', () => {
  let service: UpperCaseConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpperCaseConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
