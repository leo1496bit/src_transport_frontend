import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservBoxComponent } from './reserv-box.component';

describe('ReservBoxComponent', () => {
  let component: ReservBoxComponent;
  let fixture: ComponentFixture<ReservBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
