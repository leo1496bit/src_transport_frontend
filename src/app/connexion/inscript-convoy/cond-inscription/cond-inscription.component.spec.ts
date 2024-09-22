import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondInscriptionComponent } from './cond-inscription.component';

describe('CondInscriptionComponent', () => {
  let component: CondInscriptionComponent;
  let fixture: ComponentFixture<CondInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CondInscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CondInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
