import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentProfessionnelComponent } from './document-professionnel.component';

describe('DocumentProfessionnelComponent', () => {
  let component: DocumentProfessionnelComponent;
  let fixture: ComponentFixture<DocumentProfessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentProfessionnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
