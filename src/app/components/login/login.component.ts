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

  email = "";
  password = "";
  autenticato = true;
  //consentito = false
  errorMsg = "Spiacente, l'email o la password sono errati!";
  //infoMsg = 'Accesso Consentito'

  ngOnInit() {}
  gestAuth() {
    this.auth.autenticaService(this.email, this.password).subscribe(
      (response) => {
        console.log(response);
        this.autenticato = true;
        this.router.navigate(["orders"]);
      },
      (error) => {
        console.log(error);
        this.autenticato = false;
      }
    );
  }
}
