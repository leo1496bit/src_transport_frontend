import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAssurComponent } from './banner-assur.component';

describe('BannerAssurComponent', () => {
  let component: BannerAssurComponent;
  let fixture: ComponentFixture<BannerAssurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerAssurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerAssurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
