import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbloginComponent } from './pblogin.component';

describe('PbloginComponent', () => {
  let component: PbloginComponent;
  let fixture: ComponentFixture<PbloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
