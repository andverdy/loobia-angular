import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CardComponent } from "./components/card/card.component";
import { RouteGuardService } from "./route-guard.service";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "orders", component: CardComponent, canActivate: [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
