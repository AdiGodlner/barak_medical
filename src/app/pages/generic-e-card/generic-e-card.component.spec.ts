import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericECardComponent } from './generic-e-card.component';

describe('GenericECardComponent', () => {
  let component: GenericECardComponent;
  let fixture: ComponentFixture<GenericECardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericECardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericECardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
