import { TestBed } from '@angular/core/testing';

import { CategorydishService } from './categorydish.service';

describe('CategorydishService', () => {
  let service: CategorydishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorydishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
