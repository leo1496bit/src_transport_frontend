import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseDepartComponent } from './adresse-depart.component';

describe('AdresseDepartComponent', () => {
  let component: AdresseDepartComponent;
  let fixture: ComponentFixture<AdresseDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdresseDepartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdresseDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
