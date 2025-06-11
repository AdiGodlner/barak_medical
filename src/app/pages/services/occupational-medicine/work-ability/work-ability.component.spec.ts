import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAbilityComponent } from './work-ability.component';

describe('WorkAbilityComponent', () => {
  let component: WorkAbilityComponent;
  let fixture: ComponentFixture<WorkAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkAbilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
