import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomFixdCallUsBannerComponent } from './buttom-fixd-call-us-banner.component';

describe('ButtomFixdCallUsBannerComponent', () => {
  let component: ButtomFixdCallUsBannerComponent;
  let fixture: ComponentFixture<ButtomFixdCallUsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtomFixdCallUsBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtomFixdCallUsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
