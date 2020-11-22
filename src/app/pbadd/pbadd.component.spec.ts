import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbaddComponent } from './pbadd.component';

describe('PbaddComponent', () => {
  let component: PbaddComponent;
  let fixture: ComponentFixture<PbaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
