import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryLoginComponent } from './ministry-login.component';

describe('MinistryLoginComponent', () => {
  let component: MinistryLoginComponent;
  let fixture: ComponentFixture<MinistryLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
