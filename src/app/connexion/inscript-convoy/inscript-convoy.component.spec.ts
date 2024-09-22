import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptConvoyComponent } from './inscript-convoy.component';

describe('InscriptConvoyComponent', () => {
  let component: InscriptConvoyComponent;
  let fixture: ComponentFixture<InscriptConvoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptConvoyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptConvoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
