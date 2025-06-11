import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionPopupComponent } from './under-construction-popup.component';

describe('UnderConstructionPopupComponent', () => {
  let component: UnderConstructionPopupComponent;
  let fixture: ComponentFixture<UnderConstructionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderConstructionPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderConstructionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
