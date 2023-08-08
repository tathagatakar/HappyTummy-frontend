import { TestBed } from '@angular/core/testing';

import { SetDishIdService } from './set-dish-id.service';

describe('SetDishIdService', () => {
  let service: SetDishIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetDishIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
