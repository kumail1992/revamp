import { StorageService } from "../../shared/services/storage.service";
import { inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  RouterStateSnapshot,
} from "@angular/router";
import { LoginComponent } from "../../shared/components/login/login.component";
import { first } from "rxjs";

export const PostLoginGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const storageService = inject(StorageService);
  const _dialog = inject(MatDialog);
  // const router = inject(Router)
  // // // console.log(route.data, "data");
  // // console.log(route, "route");
  // // console.log(state, "state");
  // // router.events.subscribe((event) => {
  // //   if(event instanceof NavigationCancel) {
  // //     console.log(event,'cancel')
  // //     router.navigateByUrl('/')
  // //   }
  // // });
  if (
    storageService.getToken() ||
    route.data["accessWithoutLogin"] ||
    (route.data["allowedID"] &&
      route.data["allowedID"].length > 0 &&
      route.data["allowedID"].some((res: any) => state.url.includes(res)))
  ) {
    return true;
  } else {
    storageService.setURL(state.url);
    storageService.setToken('')
    _dialog.open(LoginComponent, {
      width: "500px",
      panelClass: "theme-modal",
      disableClose: true,
    });
    return false;
  }
};
