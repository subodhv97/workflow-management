import { TestBed } from '@angular/core/testing';

import { AddeduserService } from './addeduser.service';

describe('AddeduserService', () => {
  let service: AddeduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddeduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
