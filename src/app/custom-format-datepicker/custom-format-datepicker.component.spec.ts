import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormatDatepickerComponent } from './custom-format-datepicker.component';

describe('CustomFormatDatepickerComponent', () => {
  let component: CustomFormatDatepickerComponent;
  let fixture: ComponentFixture<CustomFormatDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormatDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormatDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
