import { TestBed } from '@angular/core/testing';

import { SetMenuIdService } from './set-menu-id.service';

describe('SetMenuIdService', () => {
  let service: SetMenuIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetMenuIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
