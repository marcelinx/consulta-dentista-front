import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AgendaFormComponent } from './containers/agenda-form/agenda-form.component';
import { AgendaComponent } from './containers/agenda/agenda.component';
import { AgendaRoutingModule } from './agenda-routing.module';



@NgModule({
  declarations: [AgendaComponent, AgendaFormComponent, AgendaListComponent],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AgendaModule { }
