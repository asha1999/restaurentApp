import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

const MaterialComponents=[
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatTableModule
];


@NgModule({

  imports: [ MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
