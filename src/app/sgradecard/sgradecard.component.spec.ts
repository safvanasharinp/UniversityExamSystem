import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgradecardComponent } from './sgradecard.component';

describe('SgradecardComponent', () => {
  let component: SgradecardComponent;
  let fixture: ComponentFixture<SgradecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgradecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgradecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
