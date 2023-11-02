import { TestBed } from '@angular/core/testing';

import { AuthLocaStorageService } from './auth-loca-storage.service';

describe('AuthLocaStorageService', () => {
  let service: AuthLocaStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLocaStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
