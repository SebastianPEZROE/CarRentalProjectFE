import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataForReservationComponent } from './components/data-for-reservation/data-for-reservation.component';
import { GetRentComponent } from './components/get-rent/get-rent.component';
import { ReturnCarComponent } from './components/return-car/return-car.component';
import { ShowCarsComponent } from './components/show-cars/show-cars.component';
import { ShowReservationComponent } from './components/show-reservation/show-reservation.component';

const routes: Routes = [
  {
    path:'',
    component: ShowCarsComponent
  },
  {
    path:'check_reservation',
    component: GetRentComponent
  },
  {
    path: 'return',
    component: ReturnCarComponent
  },
  {
    path: 'get_user_data',
    component: DataForReservationComponent
  },
  {
    path:'reservation',
    component: ShowReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
