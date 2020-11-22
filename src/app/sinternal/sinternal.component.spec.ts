import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinternalComponent } from './sinternal.component';

describe('SinternalComponent', () => {
  let component: SinternalComponent;
  let fixture: ComponentFixture<SinternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
