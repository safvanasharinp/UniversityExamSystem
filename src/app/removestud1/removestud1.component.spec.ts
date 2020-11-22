import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Removestud1Component } from './removestud1.component';

describe('Removestud1Component', () => {
  let component: Removestud1Component;
  let fixture: ComponentFixture<Removestud1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Removestud1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Removestud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
