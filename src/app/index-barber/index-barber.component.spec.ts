import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBarberComponent } from './index-barber.component';

describe('IndexBarberComponent', () => {
  let component: IndexBarberComponent;
  let fixture: ComponentFixture<IndexBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
