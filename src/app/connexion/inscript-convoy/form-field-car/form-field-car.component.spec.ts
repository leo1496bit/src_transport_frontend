import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldCarComponent } from './form-field-car.component';

describe('FormFieldCarComponent', () => {
  let component: FormFieldCarComponent;
  let fixture: ComponentFixture<FormFieldCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFieldCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
