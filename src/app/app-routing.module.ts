import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DentistsComponent } from './dentists/containers/dentists/dentists.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dentist' },
  {
    path: 'dentists',
    loadChildren: () =>
      import('./dentists/dentists.module').then((m) => m.DentistsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
