import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { LoginService } from "./services/login.service";
import { CardComponent } from "./components/card/card.component";
import { RouteGuardService } from "./route-guard.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { ErrorComponentComponent } from './error-component/error-component.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LogoutComponent } from './logout/logout.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RoleComponent } from './components/role/role.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent, CardComponent, ErrorComponentComponent, JumbotronComponent, LogoutComponent, AdministrationComponent, ForbiddenComponent, WelcomeComponent, RoleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [LoginService, RouteGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
