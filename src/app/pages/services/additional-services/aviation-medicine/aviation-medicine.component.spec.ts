import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationMedicineComponent } from './aviation-medicine.component';

describe('AviationMedicineComponent', () => {
  let component: AviationMedicineComponent;
  let fixture: ComponentFixture<AviationMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AviationMedicineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
