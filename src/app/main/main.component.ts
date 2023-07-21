import { StorageService } from './shared/services/storage.service';
import { Component, HostListener } from '@angular/core';
import { LoginComponent } from './shared/components/login/login.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BottomSheetComponent } from './shared/components/bottom-sheet/bottom-sheet.component';
import { Observable, shareReplay, tap } from 'rxjs';
import { LoginResponse } from './shared/models/models';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  dynamicMode!: MatDrawerMode;
  isDrawerOpen = true;
  userProfile$!: Observable<LoginResponse | null>;
  loginToken$!: Observable<string>;
  initialRoute: string = 'landing';
  constructor(
    private _bottomSheet: MatBottomSheet,
    private _dialog: MatDialog,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setDrawerConfigs();
    this.storageService.setUserProfile(this.storageService.getAuthData());
    this.storageService.setToken(this.storageService.getToken() ?? '');
    this.userProfile$ = this.storageService.getUserProfile().pipe(shareReplay());
    this.loginToken$ = this.storageService.getTokenObservable().pipe(shareReplay());
  }

  @HostListener('window:resize', ['$event'])
  onReSize() {
    this.setDrawerConfigs();
  }

  onOpenBottomMenu() {
    this._bottomSheet.open(BottomSheetComponent, {
      panelClass: 'theme-bottom-wrapper',
    });
  }

  /**
   * @name setDrawerConfig
   * @desc Sets drawer configuration as per
   * meta detected
   * @return {void}
   */
  setDrawerConfigs(): void {
    if (window.innerWidth <= 992) {
      this.dynamicMode = 'over';
      this.isDrawerOpen = false;
    } else {
      this.isDrawerOpen = true;
      this.dynamicMode = 'side';
    }
  }

  onLogin() {
    const dialogRef = this._dialog.open(LoginComponent, {
      width: '500px',
      panelClass: 'theme-modal',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
