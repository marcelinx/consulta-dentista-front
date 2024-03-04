import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ClienteResolver } from './guards/cliente.resolver';
import { ClientComponent } from './containers/clients/clients.component';
import { ClientFormComponent } from './containers/client-form/client-form.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  {
    path: 'new',
    component: ClientFormComponent,
    resolve: { cliente: ClienteResolver },
  },
  {
    path: 'edit/:id',
    component: ClientFormComponent,
    resolve: { cliente: ClienteResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
