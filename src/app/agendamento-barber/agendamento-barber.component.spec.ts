import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoBarberComponent } from './agendamento-barber.component';

describe('AgendamentoBarberComponent', () => {
  let component: AgendamentoBarberComponent;
  let fixture: ComponentFixture<AgendamentoBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
