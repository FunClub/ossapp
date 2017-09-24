import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAuthorityComponent } from './student-authority.component';

describe('StudentAuthorityComponent', () => {
  let component: StudentAuthorityComponent;
  let fixture: ComponentFixture<StudentAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
