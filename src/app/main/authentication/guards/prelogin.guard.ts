import { StorageService } from "../../shared/services/storage.service";
import { inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { LoginComponent } from "../../shared/components/login/login.component";

export const PreLoginGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const storageService = inject(StorageService);
  const router = inject(Router);
  console.log(route, "route");
  console.log(state, "state");
  if (storageService.getToken()) {
    router.navigateByUrl("/client");
    storageService.setToken('')
    return false;
  } else {
    return true;
  }
};
