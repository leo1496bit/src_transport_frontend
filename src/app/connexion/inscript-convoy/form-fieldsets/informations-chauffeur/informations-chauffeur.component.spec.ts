import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsChauffeurComponent } from './informations-chauffeur.component';

describe('InformationsChauffeurComponent', () => {
  let component: InformationsChauffeurComponent;
  let fixture: ComponentFixture<InformationsChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationsChauffeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationsChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
