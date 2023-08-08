import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorydishComponent } from './categorydish.component';

describe('CategorydishComponent', () => {
  let component: CategorydishComponent;
  let fixture: ComponentFixture<CategorydishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorydishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorydishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
