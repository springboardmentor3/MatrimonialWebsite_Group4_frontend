import { TestBed } from '@angular/core/testing';

import { ContactadminserviceService } from './contactadminservice.service';

describe('ContactadminserviceService', () => {
  let service: ContactadminserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactadminserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
