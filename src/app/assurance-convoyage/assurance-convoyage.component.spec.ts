import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuranceConvoyageComponent } from './assurance-convoyage.component';

describe('AssuranceConvoyageComponent', () => {
  let component: AssuranceConvoyageComponent;
  let fixture: ComponentFixture<AssuranceConvoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssuranceConvoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssuranceConvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
