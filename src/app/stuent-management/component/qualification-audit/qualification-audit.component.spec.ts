import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationAuditComponent } from './qualification-audit.component';

describe('QualificationAuditComponent', () => {
  let component: QualificationAuditComponent;
  let fixture: ComponentFixture<QualificationAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
