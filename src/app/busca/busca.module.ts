import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material/material.module';
import { BuscaRoutingModule } from './busca-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    BuscaRoutingModule
  ]
})
export class BuscaModule { }
