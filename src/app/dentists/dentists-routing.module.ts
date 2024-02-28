import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistsComponent } from './dentists/dentists.component';

const routes: Routes = [
  { path: '', component: DentistsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistsRoutingModule { }
