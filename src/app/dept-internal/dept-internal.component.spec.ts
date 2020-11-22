import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptInternalComponent } from './dept-internal.component';

describe('DeptInternalComponent', () => {
  let component: DeptInternalComponent;
  let fixture: ComponentFixture<DeptInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
