import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/User";
import { map } from "rxjs/operators";

@Injectable()
export class LoginService {
  isUserLogged = false;
  private tokenStr = null;
  @Output() userSignedIn = new EventEmitter<User>();
  @Output() userLogOut = new EventEmitter();
  constructor(private httpClient: HttpClient) {}

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
        map((response) => {
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("token", response);
          console.log("stampa token: " + response);
        })
      );
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

  clearAll() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
  }
}
