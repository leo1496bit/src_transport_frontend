import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldCarClientComponent } from './form-field-car-client.component';

describe('FormFieldCarClientComponent', () => {
  let component: FormFieldCarClientComponent;
  let fixture: ComponentFixture<FormFieldCarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFieldCarClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldCarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
