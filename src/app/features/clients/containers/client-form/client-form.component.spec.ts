import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistFormComponent } from './client-form.component';

describe('DentistFormComponent', () => {
  let component: DentistFormComponent;
  let fixture: ComponentFixture<DentistFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DentistFormComponent]
    });
    fixture = TestBed.createComponent(DentistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
