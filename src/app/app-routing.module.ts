import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCarsComponent } from './components/show-cars/show-cars.component';

const routes: Routes = [
  {
    path:'',
    component: ShowCarsComponent
  }/*,
  {
    path:'reservation',
    component: GetRentComponent
  },
  {
    path: 'return',
    component: ReturnCarComponent
  },
  {
    path: 'get_user_data',
    component: DataForReservation
  },
  {
    path:'reservation_id',
    component: ShowReservationId
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
