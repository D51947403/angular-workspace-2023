import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCaseConverterComponent } from './upper-case-converter.component';

describe('UpperCaseConverterComponent', () => {
  let component: UpperCaseConverterComponent;
  let fixture: ComponentFixture<UpperCaseConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperCaseConverterComponent]
    });
    fixture = TestBed.createComponent(UpperCaseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
