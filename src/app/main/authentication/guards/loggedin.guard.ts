import { StorageService } from './../../shared/services/storage.service';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from '../../shared/components/login/login.component';

export const LoggedinGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const storageService = inject(StorageService)
    const _dialog = inject(MatDialog)
    if((storageService.getToken() && storageService.getAuthData()) || route.data['accessWithoutLogin']) {
      return true
    }
    storageService.setURL(state.url)
    _dialog.open(LoginComponent, {
      width: '500px',
      panelClass: 'theme-modal',
    });
    return false;
}