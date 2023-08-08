import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindishComponent } from './admindish.component';

describe('AdmindishComponent', () => {
  let component: AdmindishComponent;
  let fixture: ComponentFixture<AdmindishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
