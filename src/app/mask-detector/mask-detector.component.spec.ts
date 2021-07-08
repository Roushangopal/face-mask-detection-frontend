import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskDetectorComponent } from './mask-detector.component';

describe('MaskDetectorComponent', () => {
  let component: MaskDetectorComponent;
  let fixture: ComponentFixture<MaskDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskDetectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
