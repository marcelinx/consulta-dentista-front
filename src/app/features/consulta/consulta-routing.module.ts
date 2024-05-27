import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultaFormComponent } from './containers/consulta-form/consulta-form.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { ConsultaResolver } from './guards/consulta.resolver';

const routes: Routes = [
  { path: '', component: ConsultaComponent },
  {
    path: 'new',
    component: ConsultaFormComponent,
    resolve: { consulta: ConsultaResolver },
  },
  {
    path: 'edit/:id',
    component: ConsultaFormComponent,
    resolve: { consulta: ConsultaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaRoutingModule {}
