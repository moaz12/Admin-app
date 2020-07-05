import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSidComponent } from './nav-sid.component';

describe('NavSidComponent', () => {
  let component: NavSidComponent;
  let fixture: ComponentFixture<NavSidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
