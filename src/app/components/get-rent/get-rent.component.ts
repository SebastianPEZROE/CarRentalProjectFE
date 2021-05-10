import { Component, OnInit } from '@angular/core';
import { Rent } from 'src/app/models/reservations';
import { ReservationsService } from 'src/app/reservations.service';

@Component({
  selector: 'app-get-rent',
  templateUrl: './get-rent.component.html',
  styleUrls: ['./get-rent.component.css']
})
export class GetRentComponent implements OnInit {

  rent:Rent = new Rent();
  rent_id:number = 0;
  status:string = '';

  constructor(private rentsService: ReservationsService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.rentsService.getReservationById(this.rent_id).subscribe(
      (r)=>{this.rent = r;}
    );
  }

}
