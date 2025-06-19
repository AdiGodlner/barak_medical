import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCallUsBannerComponent } from './bottom-call-us-banner.component';

describe('BottomCallUsBannerComponent', () => {
  let component: BottomCallUsBannerComponent;
  let fixture: ComponentFixture<BottomCallUsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomCallUsBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomCallUsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
