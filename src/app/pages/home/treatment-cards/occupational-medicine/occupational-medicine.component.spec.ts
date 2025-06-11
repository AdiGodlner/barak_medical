import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalMedicineComponent } from './occupational-medicine.component';

describe('OccupationalMedicineComponent', () => {
  let component: OccupationalMedicineComponent;
  let fixture: ComponentFixture<OccupationalMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupationalMedicineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupationalMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
