import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { DentistsRoutingModule } from './dentists-routing.module';
import { DentistsComponent } from './dentists/dentists.component';

@NgModule({
  declarations: [
    DentistsComponent
  ],
  imports: [
    CommonModule,
    DentistsRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class DentistsModule { }
