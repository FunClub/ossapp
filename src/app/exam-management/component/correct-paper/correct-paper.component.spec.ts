import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectPaperComponent } from './correct-paper.component';

describe('CorrectPaperComponent', () => {
  let component: CorrectPaperComponent;
  let fixture: ComponentFixture<CorrectPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
