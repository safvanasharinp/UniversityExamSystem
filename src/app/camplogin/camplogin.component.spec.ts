import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamploginComponent } from './camplogin.component';

describe('CamploginComponent', () => {
  let component: CamploginComponent;
  let fixture: ComponentFixture<CamploginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamploginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
