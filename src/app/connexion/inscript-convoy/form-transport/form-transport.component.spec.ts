import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransportComponent } from './form-transport.component';

describe('FormTransportComponent', () => {
  let component: FormTransportComponent;
  let fixture: ComponentFixture<FormTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormTransportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
