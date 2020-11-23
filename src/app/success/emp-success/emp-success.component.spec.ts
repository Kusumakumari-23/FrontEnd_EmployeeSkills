import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSuccessComponent } from './emp-success.component';

describe('EmpSuccessComponent', () => {
  let component: EmpSuccessComponent;
  let fixture: ComponentFixture<EmpSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
