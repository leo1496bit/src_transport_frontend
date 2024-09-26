import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptClientComponent } from './inscript-client.component';

describe('InscriptClientComponent', () => {
  let component: InscriptClientComponent;
  let fixture: ComponentFixture<InscriptClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
