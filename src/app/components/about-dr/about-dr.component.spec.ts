import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDrComponent } from './about-dr.component';

describe('AboutDrComponent', () => {
  let component: AboutDrComponent;
  let fixture: ComponentFixture<AboutDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
