import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Rent } from 'src/app/models/reservations';
import { ReservationsService } from '../../reservations.service';


@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.css']
})
export class ShowCarsComponent implements OnInit {
  public car:Car[] = [];
  
  start_time: string = '';
  end_time:string ='';
  type:string ='';
  order: string ='';
  asc: boolean = true;
  

  constructor(private rentsService: ReservationsService){}
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.rentsService.getAvailableCars(this.start_time, this.end_time, this.type, this.order, this.asc).subscribe(
      (cars) => {this.car= cars;}
    );
  }

  onToggle(){
    this.asc = !this.asc;
    this.onSubmit();
  }

  rentCar(car_id:number){
    this.rentsService.rentData.carId= car_id;
    this.rentsService.rentData.startTime = this.start_time;
    this.rentsService.rentData.endTime= this.end_time;
  }


}

