import { Component, OnInit } from '@angular/core';
import { ReservationsService } from 'src/app/reservations.service';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent implements OnInit {

  constructor(public rentsService: ReservationsService) { }

  ngOnInit(): void {
  }

}
