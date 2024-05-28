import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConsultaListComponent } from './components/consulta-list/consulta-list.component';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaFormComponent } from './containers/consulta-form/consulta-form.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { ConsultaHistoryModalComponent } from './components/consulta-history-modal/consulta-history-modal.component';


@NgModule({
  declarations: [ConsultaComponent, ConsultaFormComponent, ConsultaListComponent, ConsultaHistoryModalComponent],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ConsultaModule { }
