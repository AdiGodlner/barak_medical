import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAdministrationComponent } from './medical-administration.component';

describe('MedicalAdministrationComponent', () => {
  let component: MedicalAdministrationComponent;
  let fixture: ComponentFixture<MedicalAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalAdministrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
