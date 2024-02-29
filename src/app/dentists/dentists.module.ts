import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { DentistsRoutingModule } from './dentists-routing.module';
import { DentistsComponent } from './dentists/dentists.component';
import { DentistFormComponent } from './dentist-form/dentist-form.component';

@NgModule({
  declarations: [ DentistsComponent, DentistFormComponent ],
  imports: [
    CommonModule,
    DentistsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class DentistsModule { }
