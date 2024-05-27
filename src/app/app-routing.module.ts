import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'dentist', pathMatch: 'full', redirectTo: 'dentists' },
  {
    path: 'dentists',
    loadChildren: () =>
      import('./features/dentists/dentists.module').then(
        (m) => m.DentistsModule
      ),
    canActivate: [AuthGuard] // Protegendo a rota 'dentists' com o AuthGuard
  },
  { path: 'client', pathMatch: 'full', redirectTo: 'clients' },
  {
    path: 'clients',
    loadChildren: () =>
      import('./features/clients/clients.module').then((c) => c.ClientsModule),
    canActivate: [AuthGuard] // Protegendo a rota 'clients' com o AuthGuard
  },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule) },
  { path: '**', redirectTo: '' } // Redirecionando para a página inicial em caso de rota desconhecida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
