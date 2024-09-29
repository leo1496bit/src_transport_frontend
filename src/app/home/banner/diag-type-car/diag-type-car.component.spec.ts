import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagTypeCarComponent } from './diag-type-car.component';

describe('DiagTypeCarComponent', () => {
  let component: DiagTypeCarComponent;
  let fixture: ComponentFixture<DiagTypeCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagTypeCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagTypeCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
