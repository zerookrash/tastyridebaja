import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


// Servicios
import { DataDbService } from '../../../services/data-db.service';



@Component({
  selector: 'app-msn-component',
  templateUrl: './msn-component.component.html',
  styleUrls: ['./msn-component.component.css']
})
export class MsnComponentComponent implements OnInit {

  constructor( private dataApi: DataDbService ) {
    window.scroll(0, 0);
  }

  public msns = [];
  public msn = '';

  ngOnInit(): void {
    this.dataApi.getAllMessage()
      .subscribe( msns => {
        this.msns = msns;
      });
  }

  onDeleteMsn( idMsn ) {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
      this.dataApi.onDeleteMsn(idMsn);
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
