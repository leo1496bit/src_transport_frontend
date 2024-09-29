import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldCarAskComponent } from './form-field-car-ask.component';

describe('FormFieldCarAskComponent', () => {
  let component: FormFieldCarAskComponent;
  let fixture: ComponentFixture<FormFieldCarAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFieldCarAskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldCarAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
