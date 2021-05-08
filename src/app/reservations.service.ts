import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from './models/car';
import { Rent } from './models/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private url:string = 'http://localhost:8081/CarRentalSystem/';

  constructor(private http: HttpClient) { }

  public getAvailableCars(start: string, end:string, type:string, order:string, asc:boolean ): Observable<Car[]>{
    return this.http.get<Car[]>(this.url + 'available?start=' + start + '&end=' + end + '&type=' + type + '&order=' + order + '&asc=' + asc);
  }

  public insertReservation(rent: Rent): Observable<Rent>{
    return this.http.post<Rent>(this.url + 'ScheduleRent', rent);
  }

  public getReservationById(id: number): Observable<Rent>{
    return this.http.get<Rent>(this.url + 'ScheduleRent/' + id);
  }

  public cancelReservation(id: number): Observable<void>{
    return this.http.put<void>(this.url + 'ScheduleRent/cancel/' + id, null);
  }

  public returnCar(id: number): Observable<void>{
    return this.http.put<void>(this.url + 'ScheduleRent/returnCar/' + id, null);
  }

  public updateReservation(rent: Rent): Observable<Rent>{
    return this.http.put<Rent>(this.url + 'ScheduleRent/update', rent);
  }

}
