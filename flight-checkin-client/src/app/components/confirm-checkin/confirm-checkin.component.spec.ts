import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCheckinComponent } from './confirm-checkin.component';

describe('ConfirmCheckinComponent', () => {
  let component: ConfirmCheckinComponent;
  let fixture: ComponentFixture<ConfirmCheckinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmCheckinComponent]
    });
    fixture = TestBed.createComponent(ConfirmCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
