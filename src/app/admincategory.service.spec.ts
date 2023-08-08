import { TestBed } from '@angular/core/testing';

import { AdmincategoryService } from './admincategory.service';

describe('AdmincategoryService', () => {
  let service: AdmincategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
