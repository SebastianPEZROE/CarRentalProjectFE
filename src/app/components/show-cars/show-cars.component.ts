import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/models/car';
import { ReservationsService } from '../../reservations.service';


@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.css']
})
export class ShowCarsComponent implements OnInit {
  public car:Car[] = [];
  
  start_date:string='';
  start_datetime:string='';
  start_time: string = '00:00';
  end_date:string ='';
  end_datetime:string='';
  end_time:string ='00:00';
  type:string ='';
  order: string ='';
  asc: boolean = true;

  constructor(private rentsService: ReservationsService){}
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.start_datetime= this.start_date + 'T' + this.start_time;
    this.end_datetime = this.end_date + 'T' + this.end_time;
    this.rentsService.getAvailableCars(this.start_datetime, this.end_datetime, this.type, this.order, this.asc).subscribe(
      (cars) => {this.car= cars;}
    );
  }

  onToggle(){
    this.asc = !this.asc;
    this.onSubmit();
  }

  rentCar(car_id:number, car_model: string){
    this.rentsService.car_model = car_model;
    this.rentsService.rentData.carId= car_id;
    this.rentsService.rentData.startTime = this.start_datetime;
    this.rentsService.rentData.endTime= this.end_datetime;
  }

}

