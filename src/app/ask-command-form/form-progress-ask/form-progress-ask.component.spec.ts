import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgressAskComponent } from './form-progress-ask.component';

describe('FormProgressAskComponent', () => {
  let component: FormProgressAskComponent;
  let fixture: ComponentFixture<FormProgressAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormProgressAskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProgressAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
