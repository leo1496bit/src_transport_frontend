import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTarificationComponent } from './banner-tarification.component';

describe('BannerTarificationComponent', () => {
  let component: BannerTarificationComponent;
  let fixture: ComponentFixture<BannerTarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerTarificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerTarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
