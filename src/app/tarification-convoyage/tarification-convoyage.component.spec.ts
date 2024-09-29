import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarificationConvoyageComponent } from './tarification-convoyage.component';

describe('TarificationConvoyageComponent', () => {
  let component: TarificationConvoyageComponent;
  let fixture: ComponentFixture<TarificationConvoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarificationConvoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarificationConvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
