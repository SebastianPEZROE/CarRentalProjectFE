import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataForReservationComponent } from './data-for-reservation.component';

describe('DataForReservationComponent', () => {
  let component: DataForReservationComponent;
  let fixture: ComponentFixture<DataForReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataForReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataForReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
