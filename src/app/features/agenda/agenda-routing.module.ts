import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AgendaResolver } from './guards/agenda.resolver';
import { AgendaComponent } from './containers/agenda/agenda.component';
import { AgendaFormComponent } from './containers/agenda-form/agenda-form.component';

const routes: Routes = [
  { path: '', component: AgendaComponent },
  {
    path: 'new',
    component: AgendaFormComponent,
    resolve: { agenda: AgendaResolver },
  },
  {
    path: 'edit/:id',
    component: AgendaFormComponent,
    resolve: { agenda: AgendaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaRoutingModule {}
