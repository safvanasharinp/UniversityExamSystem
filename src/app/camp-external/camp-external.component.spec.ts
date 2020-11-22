import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampExternalComponent } from './camp-external.component';

describe('CampExternalComponent', () => {
  let component: CampExternalComponent;
  let fixture: ComponentFixture<CampExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
