import { Component, OnInit } from '@angular/core';
import { ReservationsService } from 'src/app/reservations.service';

@Component({
  selector: 'app-return-car',
  templateUrl: './return-car.component.html',
  styleUrls: ['./return-car.component.css']
})
export class ReturnCarComponent implements OnInit {
  rent_id: number = 0;
  message:string ='';

  constructor(private rentsService: ReservationsService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.rentsService.returnCar(this.rent_id).subscribe(
      i=>{this.message = 'Your reservation have been cancel';}
    );
  }

}
