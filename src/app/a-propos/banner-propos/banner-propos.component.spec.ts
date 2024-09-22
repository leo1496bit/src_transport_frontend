import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProposComponent } from './banner-propos.component';

describe('BannerProposComponent', () => {
  let component: BannerProposComponent;
  let fixture: ComponentFixture<BannerProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerProposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
