import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEntComponent } from './banner-ent.component';

describe('BannerEntComponent', () => {
  let component: BannerEntComponent;
  let fixture: ComponentFixture<BannerEntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerEntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
