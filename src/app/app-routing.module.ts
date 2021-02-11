import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Componentes
import { PagesComponent } from './components/pages.component';
import { PagesAdminComponent } from './componentsAdmin/pages-admin.component';
import { Page404Component } from './components/page404/page404.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module')
        .then(m => m.HomeModule)
      },
      {
        path: 'theride',
        loadChildren: () => import('./components/ride/ride.module')
        .then(m => m.RideModule)
      },
      {
        path: 'detalle/:id',
        loadChildren: () => import('./components/detalle-tour/detalle-tour.module')
        .then(m => m.DetalleTourModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./components/faq/faq.module')
        .then(m => m.FaqModule)
      },
      {
        path: 'reservas',
        loadChildren: () => import('./components/reservas/reservas.module')
        .then(m => m.ReservasModule)
      },
      {
        path: 'mantenimiento',
        component: MantenimientoComponent
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  {
    path: 'ride_admin',
    loadChildren: () => import('./componentsAdmin/login/login.module')
    .then(m => m.LoginModule)
  },
  {
    path: 'admin',
    component: PagesAdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'alta',
        loadChildren: () => import('./componentsAdmin/altas/altas.module')
        .then(m => m.AltasModule)
      },
      {
        path: 'msn',
        loadChildren: () => import('./componentsAdmin/msn/msn.module')
        .then(m => m.MsnModule)
      },
      {
        path: 'reserva',
        loadChildren: () => import('./componentsAdmin/reserva/reserva.module')
        .then(m => m.ReservaModule)
      },
      {
        path: 'dasboard',
        loadChildren: () => import('./componentsAdmin/dasboard/dasboard.module')
        .then(m => m.DasboardModule)
      },
      { path: '', redirectTo: 'alta', pathMatch: 'full' },
    ]
  },
 {
   path: '**',
   component: Page404Component
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
