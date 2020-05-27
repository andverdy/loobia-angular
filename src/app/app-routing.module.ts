import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CardComponent } from "./components/card/card.component";
import { RouteGuardService } from "./route-guard.service";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "orders",
    component: CardComponent,
    canActivate: [RouteGuardService],
  },
  { path: "logout", component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
