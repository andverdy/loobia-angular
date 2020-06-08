import { Injectable, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/User";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
  isUserLogged = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  autenticaService(email: string, password: string) {
    let body = {
      email: email,
      password: password,
    };

    return this.httpClient
      .post("http://localhost:8080/loobia/api/user/login", body, {
        responseType: "text",
      })
      .pipe(
        map((data) => {
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("token", data);
          console.log("stampa token: " + data);
        })
      );
  }

  isUserLoggedIn() {
    this.isUserLogged = !!sessionStorage.getItem("token");
    return this.isUserLogged;
  }
  loggedUser() {
    let utente = sessionStorage.getItem("email");

    return sessionStorage.getItem("email") != null ? utente : "";
  }

  getAuthToken() {
    if (this.loggedUser()) return sessionStorage.getItem("token");
    else return "";
  }

  isLogged() {
    return sessionStorage.getItem("email") != null ? true : false;
  }
}
