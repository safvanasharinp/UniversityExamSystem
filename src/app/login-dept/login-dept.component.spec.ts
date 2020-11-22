import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDeptComponent } from './login-dept.component';

describe('LoginDeptComponent', () => {
  let component: LoginDeptComponent;
  let fixture: ComponentFixture<LoginDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
