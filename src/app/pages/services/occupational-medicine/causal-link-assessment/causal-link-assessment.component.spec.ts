import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausalLinkAssessmentComponent } from './causal-link-assessment.component';

describe('CausalLinkAssessmentComponent', () => {
  let component: CausalLinkAssessmentComponent;
  let fixture: ComponentFixture<CausalLinkAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CausalLinkAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausalLinkAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
