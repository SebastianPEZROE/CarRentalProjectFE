import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCarsComponent } from './components/show-cars/show-cars.component';
import { DataForReservationComponent } from './components/data-for-reservation/data-for-reservation.component';
import { ShowReservationComponent } from './components/show-reservation/show-reservation.component';
import { GetRentComponent } from './components/get-rent/get-rent.component';
import { ReturnCarComponent } from './components/return-car/return-car.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCarsComponent,
    DataForReservationComponent,
    ShowReservationComponent,
    GetRentComponent,
    ReturnCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
