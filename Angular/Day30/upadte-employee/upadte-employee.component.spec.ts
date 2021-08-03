import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteEmployeeComponent } from './upadte-employee.component';

describe('UpadteEmployeeComponent', () => {
  let component: UpadteEmployeeComponent;
  let fixture: ComponentFixture<UpadteEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpadteEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
