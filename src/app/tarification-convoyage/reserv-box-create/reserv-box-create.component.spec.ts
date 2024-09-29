import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservBoxCreateComponent } from './reserv-box-create.component';

describe('ReservBoxCreateComponent', () => {
  let component: ReservBoxCreateComponent;
  let fixture: ComponentFixture<ReservBoxCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservBoxCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservBoxCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
