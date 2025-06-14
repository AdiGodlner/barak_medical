import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsWraperComponent } from './google-maps-wraper.component';

describe('GoogleMapsWraperComponent', () => {
  let component: GoogleMapsWraperComponent;
  let fixture: ComponentFixture<GoogleMapsWraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleMapsWraperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapsWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
