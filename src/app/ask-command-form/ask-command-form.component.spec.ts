import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskCommandFormComponent } from './ask-command-form.component';

describe('AskCommandFormComponent', () => {
  let component: AskCommandFormComponent;
  let fixture: ComponentFixture<AskCommandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AskCommandFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskCommandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
