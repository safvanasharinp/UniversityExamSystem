import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addinternal1Component } from './addinternal1.component';

describe('Addinternal1Component', () => {
  let component: Addinternal1Component;
  let fixture: ComponentFixture<Addinternal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addinternal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addinternal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
