import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchMenagementComponent } from './batch-menagement.component';

describe('BatchMenagementComponent', () => {
  let component: BatchMenagementComponent;
  let fixture: ComponentFixture<BatchMenagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchMenagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchMenagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
