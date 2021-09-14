import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentdataMinistryComponent } from './view-studentdata-ministry.component';

describe('ViewStudentdataMinistryComponent', () => {
  let component: ViewStudentdataMinistryComponent;
  let fixture: ComponentFixture<ViewStudentdataMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentdataMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentdataMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
