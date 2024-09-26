import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPermisComponent } from './information-permis.component';

describe('InformationPermisComponent', () => {
  let component: InformationPermisComponent;
  let fixture: ComponentFixture<InformationPermisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationPermisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationPermisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
