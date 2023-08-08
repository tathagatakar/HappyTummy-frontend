import { TestBed } from '@angular/core/testing';

import { AdminmenuService } from './adminmenu.service';

describe('AdminmenuService', () => {
  let service: AdminmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
