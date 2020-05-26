import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private auth: LoginService, private router: Router) {}

  ngOnInit() {}
  signIn(form: NgForm) {
    if (!form.valid) {
      return false;
    }

    let result = this.auth.signIn(form.value.email, form.value.password);
    if (result) {
      this.router.navigate(["orders"]);
    }
  }
}
