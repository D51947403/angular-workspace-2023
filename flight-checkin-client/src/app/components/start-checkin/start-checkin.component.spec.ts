import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCheckinComponent } from './start-checkin.component';

describe('StartCheckinComponent', () => {
  let component: StartCheckinComponent;
  let fixture: ComponentFixture<StartCheckinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartCheckinComponent]
    });
    fixture = TestBed.createComponent(StartCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
