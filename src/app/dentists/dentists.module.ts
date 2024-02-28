import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistsRoutingModule } from './dentists-routing.module';
import { DentistsComponent } from './dentists/dentists.component';


@NgModule({
  declarations: [
    DentistsComponent
  ],
  imports: [
    CommonModule,
    DentistsRoutingModule
  ]
})
export class DentistsModule { }
