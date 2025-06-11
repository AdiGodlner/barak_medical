import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTreatmentsComponent } from './additional-treatments.component';

describe('AdditionalTreatmentsComponent', () => {
  let component: AdditionalTreatmentsComponent;
  let fixture: ComponentFixture<AdditionalTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalTreatmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
