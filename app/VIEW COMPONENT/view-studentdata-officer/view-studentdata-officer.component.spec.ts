import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentdataOfficerComponent } from './view-studentdata-officer.component';

describe('ViewStudentdataOfficerComponent', () => {
  let component: ViewStudentdataOfficerComponent;
  let fixture: ComponentFixture<ViewStudentdataOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentdataOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentdataOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
