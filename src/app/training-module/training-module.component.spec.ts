import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingModuleComponent } from './training-module.component';

describe('TrainingModuleComponent', () => {
  let component: TrainingModuleComponent;
  let fixture: ComponentFixture<TrainingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
