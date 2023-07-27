import { MatCheckboxModule } from "@angular/material/checkbox";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BottomSheetComponent } from "./components/bottom-sheet/bottom-sheet.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
import { SortByOrderPipe } from "./utilities/sort-by-order.pipe";
import { SafePipe } from "./utilities/safe.pipe";

@NgModule({
  declarations: [
    BottomSheetComponent,
    LoginComponent,
    SortByOrderPipe,
    SafePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NgxIntlTelInputModule,
  ],
  exports: [BottomSheetComponent, LoginComponent, SortByOrderPipe, SafePipe],
})
export class SharedModule {}
