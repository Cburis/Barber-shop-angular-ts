import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBarberComponent } from './footer-barber.component';

describe('FooterBarberComponent', () => {
  let component: FooterBarberComponent;
  let fixture: ComponentFixture<FooterBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
