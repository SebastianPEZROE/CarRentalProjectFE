import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRentComponent } from './get-rent.component';

describe('GetRentComponent', () => {
  let component: GetRentComponent;
  let fixture: ComponentFixture<GetRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
