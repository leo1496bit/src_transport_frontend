import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBancaireComponent } from './information-bancaire.component';

describe('InformationBancaireComponent', () => {
  let component: InformationBancaireComponent;
  let fixture: ComponentFixture<InformationBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationBancaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
