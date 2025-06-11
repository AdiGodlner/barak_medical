import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivingMedicineComponent } from './diving-medicine.component';

describe('DivingMedicineComponent', () => {
  let component: DivingMedicineComponent;
  let fixture: ComponentFixture<DivingMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivingMedicineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivingMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
