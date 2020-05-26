import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";
import { User } from "src/app/model/User";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  title = "LOOBIA";
  subtitle = "Per la Cura dei tuoi Capelli";
  @Output() onNewUser = new EventEmitter();
  isUserLOggedIn = false;
  username: string;

  constructor(private auth: LoginService, private router: Router) {
    auth.userSignedIn.subscribe((user: User) => {
      this.username = user.name;
      this.isUserLOggedIn = true;
    });
    auth.userLogOut.subscribe(() => {
      this.username = "";
      this.isUserLOggedIn = false;
    });
  }

  ngOnInit() {
    this.isUserLOggedIn = this.auth.isUserLoggedIn();
  }

  newUser() {
    this.onNewUser.emit();
  }

  logOut(e) {
    e.preventDefault();
    this.auth.logOut();
    setTimeout(() => {
      this.router.navigate([""]);
    }, 300);
  }
  signIn(e) {
    e.preventDefault();
    this.router.navigate([""]);
  }
}
