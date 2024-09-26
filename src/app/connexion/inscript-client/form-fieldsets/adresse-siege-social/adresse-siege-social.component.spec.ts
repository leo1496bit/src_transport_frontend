import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseSiegeSocialComponent } from './adresse-siege-social.component';

describe('AdresseSiegeSocialComponent', () => {
  let component: AdresseSiegeSocialComponent;
  let fixture: ComponentFixture<AdresseSiegeSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdresseSiegeSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdresseSiegeSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
