import { Component, OnInit } from '@angular/core';
import { Car } from './models/car';
import { ReservationsService } from './reservations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public car:Car[] = [];

  constructor(private rentsService: ReservationsService){}

  ngOnInit(){
    //this.getCars("2021-05-04_10:30", "2021-06-04_11:00","","price", true);
  }

  /*public getCars(start: string, end:string, type:string, order:string, asc:boolean): void{
    this.rentsService.getAvailableCars(start, end, type, order, asc).subscribe(
      (cars) => {this.car= cars;}
    );
  }*/

}
