import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBarberComponent } from './cadastro-barber.component';

describe('CadastroBarberComponent', () => {
  let component: CadastroBarberComponent;
  let fixture: ComponentFixture<CadastroBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
