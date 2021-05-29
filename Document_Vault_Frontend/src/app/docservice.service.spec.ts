import { TestBed } from '@angular/core/testing';

import { DocserviceService } from './docservice.service';

describe('DocserviceService', () => {
  let service: DocserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
