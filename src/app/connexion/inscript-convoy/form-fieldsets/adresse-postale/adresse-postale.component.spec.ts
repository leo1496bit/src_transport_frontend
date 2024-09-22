import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressePostaleComponent } from './adresse-postale.component';

describe('AdressePostaleComponent', () => {
  let component: AdressePostaleComponent;
  let fixture: ComponentFixture<AdressePostaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdressePostaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdressePostaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
