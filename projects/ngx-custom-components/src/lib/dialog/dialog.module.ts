import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassDialogComponent } from './glass-dialog/glass-dialog.component';



@NgModule({
  declarations: [
    GlassDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlassDialogComponent
  ]
})
export class DialogModule { }
