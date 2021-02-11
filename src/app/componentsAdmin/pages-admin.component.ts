import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-admin',
  templateUrl: './pages-admin.component.html',
  styleUrls: [ './pages-admin.components.css' ]
})
export class PagesAdminComponent implements OnInit {

  calseToggled = '';

  cambiaEstado() {
    this.calseToggled = 'togged';
  }

  constructor() { }

  ngOnInit(): void {
  }


}
