import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovestudComponent } from './removestud.component';

describe('RemovestudComponent', () => {
  let component: RemovestudComponent;
  let fixture: ComponentFixture<RemovestudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovestudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovestudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
