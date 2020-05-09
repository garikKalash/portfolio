import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DoneProjectsComponent} from './done-projects.component';

describe('DoneProjectsComponent', () => {
  let component: DoneProjectsComponent;
  let fixture: ComponentFixture<DoneProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoneProjectsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
