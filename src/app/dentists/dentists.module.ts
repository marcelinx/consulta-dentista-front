import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { DentistsRoutingModule } from './dentists-routing.module';
import { DentistsComponent } from './dentists/dentists.component';



@NgModule({
  declarations: [
    DentistsComponent
  ],
  imports: [
    CommonModule,
    DentistsRoutingModule,
    MatTableModule

  ]
})
export class DentistsModule { }
