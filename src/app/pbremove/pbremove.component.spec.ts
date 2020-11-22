import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbremoveComponent } from './pbremove.component';

describe('PbremoveComponent', () => {
  let component: PbremoveComponent;
  let fixture: ComponentFixture<PbremoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbremoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
