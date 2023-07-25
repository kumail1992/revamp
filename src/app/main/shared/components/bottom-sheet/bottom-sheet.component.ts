import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data:any,private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {
  }

  dismissSheet(event:MouseEvent) {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
