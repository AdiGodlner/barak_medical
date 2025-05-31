import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryMedicineComponent } from './military-medicine.component';

describe('MilitaryMedicineComponent', () => {
  let component: MilitaryMedicineComponent;
  let fixture: ComponentFixture<MilitaryMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilitaryMedicineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilitaryMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
