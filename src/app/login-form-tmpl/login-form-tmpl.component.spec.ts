import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormTmplComponent } from './login-form-tmpl.component';

describe('LoginFormTmplComponent', () => {
  let component: LoginFormTmplComponent;
  let fixture: ComponentFixture<LoginFormTmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormTmplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormTmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
