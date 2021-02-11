import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

// Servicios
import { DataApiService } from '../../../services/data-api.service';

// Interfaces
import { ReservaI } from '../../../models/reservas.interface';


@Component({
  selector: 'app-reserva-component',
  templateUrl: './reserva-component.component.html',
  styleUrls: ['./reserva-component.component.css']
})
export class ReservaComponentComponent implements OnInit {

  constructor(public dataApi: DataApiService) { 
    window.scroll(0, 0);
  }

  public reservations = [];
  public reservation = '';

  ngOnInit(): void {
    this.dataApi.getAllReservas()
      .subscribe(reservations => {
        this.reservations = reservations
        console.log(this.reservations);
      });
  }

  onDeleteReservation(id): void {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
      this.dataApi.deleteReserv(id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been deleted',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

}
