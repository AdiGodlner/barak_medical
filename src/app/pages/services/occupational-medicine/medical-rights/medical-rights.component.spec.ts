import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRightsComponent } from './medical-rights.component';

describe('MedicalRightsComponent', () => {
  let component: MedicalRightsComponent;
  let fixture: ComponentFixture<MedicalRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalRightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
