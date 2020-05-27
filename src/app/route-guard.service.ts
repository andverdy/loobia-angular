import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { LoginService } from "./services/login.service";

@Injectable({
  providedIn: "root",
})
export class RouteGuardService implements CanActivate {
  constructor(private router: Router, private auth: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.isLogged()) {
      this.router.navigate([""]);
      return false;
    } else {
      return true;
    }
  }
}
