import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatiionsSupplementairesComponent } from './prestatiions-supplementaires.component';

describe('PrestatiionsSupplementairesComponent', () => {
  let component: PrestatiionsSupplementairesComponent;
  let fixture: ComponentFixture<PrestatiionsSupplementairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrestatiionsSupplementairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestatiionsSupplementairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
