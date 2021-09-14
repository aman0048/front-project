import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllInstitutesComponent } from './view-all-institutes.component';

describe('ViewAllInstitutesComponent', () => {
  let component: ViewAllInstitutesComponent;
  let fixture: ComponentFixture<ViewAllInstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllInstitutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
