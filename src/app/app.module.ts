import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormComponent } from './shared/footer/form/form.component';
import { PagesComponent } from './components/pages.component';
import { PagesAdminComponent } from './componentsAdmin/pages-admin.component';
import { Page404Component } from './components/page404/page404.component';
import { FooterAdminComponent } from './shared/footer-admin/footer-admin.component';
import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';
import { DetalleTourComponentComponent } from './components/detalle-tour/detalle-tour-component/detalle-tour-component.component';

import { DataDbService } from './services/data-db.service';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    FormComponent,
    PagesComponent,
    PagesAdminComponent,
    Page404Component,
    FooterAdminComponent,
    NavAdminComponent,
    DetalleTourComponentComponent,
    MantenimientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgbModule,
  ],
  providers: [
    DataDbService,
    AngularFireStorage,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
