import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from '../authentication';

describe('AuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
