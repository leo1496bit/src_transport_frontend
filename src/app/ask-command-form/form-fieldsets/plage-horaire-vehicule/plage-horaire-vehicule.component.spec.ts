import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlageHoraireVehiculeComponent } from './plage-horaire-vehicule.component';

describe('PlageHoraireVehiculeComponent', () => {
  let component: PlageHoraireVehiculeComponent;
  let fixture: ComponentFixture<PlageHoraireVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlageHoraireVehiculeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlageHoraireVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
