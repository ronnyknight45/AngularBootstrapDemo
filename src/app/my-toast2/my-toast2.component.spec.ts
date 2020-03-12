import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToast2Component } from './my-toast2.component';

describe('MyToast2Component', () => {
  let component: MyToast2Component;
  let fixture: ComponentFixture<MyToast2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyToast2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToast2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
