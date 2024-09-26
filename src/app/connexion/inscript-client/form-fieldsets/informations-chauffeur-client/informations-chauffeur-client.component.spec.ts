import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsChauffeurClientComponent } from './informations-chauffeur-client.component';

describe('InformationsChauffeurClientComponent', () => {
  let component: InformationsChauffeurClientComponent;
  let fixture: ComponentFixture<InformationsChauffeurClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationsChauffeurClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationsChauffeurClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
