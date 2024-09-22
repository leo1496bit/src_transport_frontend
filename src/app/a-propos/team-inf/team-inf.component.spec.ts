import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfComponent } from './team-inf.component';

describe('TeamInfComponent', () => {
  let component: TeamInfComponent;
  let fixture: ComponentFixture<TeamInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamInfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
