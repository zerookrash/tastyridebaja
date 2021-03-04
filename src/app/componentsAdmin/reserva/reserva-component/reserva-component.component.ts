import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

// Servicios
import { DataApiService } from '../../../services/data-api.service';

// Interfaces
import { ReservaI } from '../../../models/reservas.interface';

declare var ga: Function;

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
        this.reservations = reservations.sort( (a,b) => {
          const resA = a.name.toUpperCase();
          const resB = b.name.toUpperCase();

          let compare = 0;
          if (resA > resB) {
            compare = 1;
          } else if (resA < resB) {
            compare = -1
          }
          return compare
        })
      });
  }

  onPendingReservation(res): void {
    this.dataApi.updateReservaPending(res);
  }

  onConfirmReservation(res): void {
    this.dataApi.updateReservaConfirm(res);
    ga('send', {
      hitType: 'event',
      eventCategory: 'Reservation confirmed',
      eventAction: [res.title, ' / ',res.name]
    });
  }

  onCancelledReservation(res): void {
    this.dataApi.updateReservaCancelled(res);
    ga('send', {
      hitType: 'event',
      eventCategory: 'Reservation Cacelled',
      eventAction: [res.title, ' / ',res.name]
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
