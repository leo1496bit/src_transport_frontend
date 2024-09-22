import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionConvoyeurComponent } from './inscription-convoyeur.component';

describe('InscriptionConvoyeurComponent', () => {
  let component: InscriptionConvoyeurComponent;
  let fixture: ComponentFixture<InscriptionConvoyeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionConvoyeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionConvoyeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
