import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { DentistsRoutingModule } from './dentists-routing.module';
import { DentistsComponent } from './dentists/dentists.component';

@NgModule({
  declarations: [
    DentistsComponent
  ],
  imports: [
    CommonModule,
    DentistsRoutingModule,
    AppMaterialModule
  ]
})
export class DentistsModule { }
