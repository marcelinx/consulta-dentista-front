import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistsComponent } from './dentists/dentists.component';
import { DentistFormComponent } from './dentist-form/dentist-form.component';

const routes: Routes = [
  { path: '', component: DentistsComponent },
  {
    path: 'new',
    component: DentistFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentistsRoutingModule {}
