import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from '../../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './containers/clients/clients.component';
import { ClientFormComponent } from './containers/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';



@NgModule({
  declarations: [ClientComponent, ClientFormComponent, ClientListComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ClientsModule {}
