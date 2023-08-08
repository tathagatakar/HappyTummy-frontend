import { TestBed } from '@angular/core/testing';

import { SetCategoryIdService } from './set-category-id.service';

describe('SetCategoryIdService', () => {
  let service: SetCategoryIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetCategoryIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
