import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { LoginService } from "./services/login.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { RoleService } from "./services/role.service";

@Injectable({
  providedIn: "root",
})
export class RouteGuardService implements CanActivate {
  token: string = "";
  ruolo: string;
  email = sessionStorage.getItem("email");
  constructor(
    private router: Router,
    private auth: LoginService,
    private role: RoleService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.token = this.auth.getAuthToken();

    const helper = new JwtHelperService();
    const decodeToken = helper.decodeToken(this.token);
    // this.ruoli = decodeToken["authorities"];
    //this.ruoli = route.data.roles;

    this.role.getRole(this.email).subscribe(
      (data) => {
        this.ruolo = sessionStorage.getItem("ruolo");
        if (this.ruolo !== null) {
          if (this.ruolo === "AGENT") {
            this.router.navigate(["orders"]);
          } else {
            this.router.navigate(["admin"]);
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );

    /** if (!this.auth.isLogged()) {
      this.router.navigate([""]);
      return false;
    } else {
      if (route.data.roles == null || route.data.roles.length === 0) {
        return true;
      } else if (this.ruoli.some((r) => route.data.roles.includes(r))) {
        return true;
      } else {
        this.router.navigate(["forbidden"]);
        return false;
      }
    } */
    return true;
  }
}
