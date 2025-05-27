import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingGroundComponent } from './testing-ground.component';

describe('TestingGroundComponent', () => {
  let component: TestingGroundComponent;
  let fixture: ComponentFixture<TestingGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingGroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
