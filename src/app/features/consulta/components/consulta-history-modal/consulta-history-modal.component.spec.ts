import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHistoryModalComponent } from './consulta-history-modal.component';

describe('ConsultaHistoryModalComponent', () => {
  let component: ConsultaHistoryModalComponent;
  let fixture: ComponentFixture<ConsultaHistoryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaHistoryModalComponent]
    });
    fixture = TestBed.createComponent(ConsultaHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
