import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CardComponent } from "./components/card/card.component";
import { RouteGuardService } from "./route-guard.service";
import { LogoutComponent } from "./logout/logout.component";
import { Ruoli } from "./model/ruoli";
import { AdministrationComponent } from "./components/administration/administration.component";
import { ForbiddenComponent } from "./components/forbidden/forbidden.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { RoleComponent } from "./components/role/role.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "admin", component: AdministrationComponent },
  { path: "orders", component: CardComponent },
  { path: "roles", component: RoleComponent, canActivate: [RouteGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
