import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryConsultingComponent } from './industry-consulting.component';

describe('IndustryConsultingComponent', () => {
  let component: IndustryConsultingComponent;
  let fixture: ComponentFixture<IndustryConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryConsultingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
