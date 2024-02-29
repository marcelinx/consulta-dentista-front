import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistsComponent } from './containers/dentists/dentists.component';
import { DentistFormComponent } from './containers/dentist-form/dentist-form.component';
import { DentistaResolver } from './guards/dentist.resolver';

const routes: Routes = [
  { path: '', component: DentistsComponent },
  {
    path: 'new',
    component: DentistFormComponent,
    resolve: { dentista: DentistaResolver },
  },
  {
    path: 'edit/:id',
    component: DentistFormComponent,
    resolve: { dentista: DentistaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentistsRoutingModule {}
