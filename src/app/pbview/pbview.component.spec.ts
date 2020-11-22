import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbviewComponent } from './pbview.component';

describe('PbviewComponent', () => {
  let component: PbviewComponent;
  let fixture: ComponentFixture<PbviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
