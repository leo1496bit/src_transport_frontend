import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaMessageComponent } from './loca-message.component';

describe('LocaMessageComponent', () => {
  let component: LocaMessageComponent;
  let fixture: ComponentFixture<LocaMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocaMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocaMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
