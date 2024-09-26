import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgressClientComponent } from './form-progress-client.component';

describe('FormProgressClientComponent', () => {
  let component: FormProgressClientComponent;
  let fixture: ComponentFixture<FormProgressClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormProgressClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProgressClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
