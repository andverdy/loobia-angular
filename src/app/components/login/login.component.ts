import { NgForm } from "@angular/forms";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @Output() userlogout = new EventEmitter();
  constructor(private auth: LoginService, private router: Router) {}

  email = "";
  password = "";
  autenticato = true;
  private isUserLogged = false;
  //consentito = false
  errorMsg = "Spiacente, l'email o la password sono errati!";
  //infoMsg = 'Accesso Consentito'

  ngOnInit() {}
  gestAuth() {
    this.auth.autenticaService(this.email, this.password).subscribe(
      (data) => {
        console.log(data);
        this.autenticato = true;
        this.isUserLogged = true;
        this.router.navigate(["roles"]);
      },
      (error) => {
        console.log(error);
        this.autenticato = false;
        this.isUserLogged = false;
      }
    );
  }
}
