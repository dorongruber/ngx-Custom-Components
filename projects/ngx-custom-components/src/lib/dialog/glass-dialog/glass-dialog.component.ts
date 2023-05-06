import { Component, OnChanges ,Input } from '@angular/core';

@Component({
  selector: 'lib-glass-dialog',
  templateUrl: './glass-dialog.component.html',
  styleUrls: ['./glass-dialog.component.css']
})
export class GlassDialogComponent implements OnChanges {

  @Input() dialogBackgroundFilter: string = 'blur(5px)'
  @Input() dialogBorderRadius: string = '15px';
  @Input() dialogPosition: 'initial' | 'relative' = 'relative';
  @Input() dialogPadding: string = '2rem';
  @Input() dialogBorder: string = 'transparent'
  @Input() dialogWidth: string = 'fit-content';

  private defualtValues = {
    dialogBorderRadius: '15px',
    dialogPadding: '2rem',
    dialogWidth: 'fit-content',
  };
  private $scaleRegex = new RegExp("^[0-9]+(rm|rem|px|vh|vw)$");

  ngOnChanges() {
    this.dialogPadding = this.$scaleRegex.test(this.dialogPadding) ? this.dialogPadding : this.defualtValues.dialogPadding;
    this.dialogWidth = this.$scaleRegex.test(this.dialogWidth) ? this.dialogWidth : this.defualtValues.dialogWidth;
  }
}
