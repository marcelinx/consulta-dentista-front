import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },

  { path: 'dentist', redirectTo: 'dentists' },
  {
    path: 'dentists',
    loadChildren: () =>
      import('./features/dentists/dentists.module').then(
        (m) => m.DentistsModule
      ),
    canActivate: [AuthGuard],
  },
  { path: 'client', redirectTo: 'clients' },
  {
    path: 'clients',
    loadChildren: () =>
      import('./features/clients/clients.module').then((c) => c.ClientsModule),
    canActivate: [AuthGuard],
  },
  { path: 'consultas', redirectTo: 'consultas' },
  {
    path: 'consultas',
    loadChildren: () =>
      import('./features/consulta/consulta.module').then((c) => c.ConsultaModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'agendas',
    loadChildren: () =>
    import('./features/agenda/agenda.module').then((a) => a.AgendaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
