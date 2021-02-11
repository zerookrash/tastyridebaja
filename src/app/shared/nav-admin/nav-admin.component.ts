import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DataDbService } from '../../services/data-db.service';


@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {

  constructor(
    private dataApi: DataDbService,
    private afsAuth: AngularFireAuth,
    private router: Router,
  ) { }

  public msns;

  ngOnInit(): void {
    this.dataApi.getAllMessage()
      .subscribe( msns => {
        this.msns = msns.length;
      });
  }

  onLogOut() {
    this.afsAuth.signOut();
    this.router.navigate(['']);
  }


}
