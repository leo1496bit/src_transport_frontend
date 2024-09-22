import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDeliveryComponent } from './step-delivery.component';

describe('StepDeliveryComponent', () => {
  let component: StepDeliveryComponent;
  let fixture: ComponentFixture<StepDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
