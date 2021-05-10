import { Component, Input, OnInit } from '@angular/core';
import { ReservationsService } from 'src/app/reservations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-for-reservation',
  templateUrl: './data-for-reservation.component.html',
  styleUrls: ['./data-for-reservation.component.css']
})
export class DataForReservationComponent implements OnInit {

  user_name:string='';
  user_lastname:string ='';

  constructor(public rentsService: ReservationsService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.rentsService.rentData.clientName = this.user_name;
    this.rentsService.rentData.clientLastname = this.user_lastname;
    this.rentsService.insertReservation(this.rentsService.rentData).subscribe(
      (r)=> {this.rentsService.newRent= r;}
      );
    this.router.navigate(['/reservation']);
  }

}
