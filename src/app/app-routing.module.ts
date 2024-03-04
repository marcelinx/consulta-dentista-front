import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dentist' },
  {
    path: 'dentists',
    loadChildren: () =>
      import('./features/dentists/dentists.module').then(
        (m) => m.DentistsModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'client' },
  {
    path: 'clients',
    loadChildren: () =>
    import('./features/clients/clients.module').then(
      (c) => c.ClientsModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
