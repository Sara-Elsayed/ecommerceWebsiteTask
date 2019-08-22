import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material"
import { DialogService} from '../shared/services/dialog.service';
import { MatDialogRef } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatDialogModule,
    Material.MatIcon
  ],
  exports: [
    Material.MatDialogModule,
    Material.MatIcon
  ],
  providers: [
    DialogService, {provide: MatDialogRef, useValue: {}},
 ],
})
export class MaterialModule { }
