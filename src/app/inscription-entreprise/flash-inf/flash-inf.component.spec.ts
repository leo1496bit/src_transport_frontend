import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashInfComponent } from './flash-inf.component';

describe('FlashInfComponent', () => {
  let component: FlashInfComponent;
  let fixture: ComponentFixture<FlashInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashInfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
