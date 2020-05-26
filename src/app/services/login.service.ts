import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/User";

interface Jwt {
  access_token: string;
  token_type: string;
  expires_in: number;
  user_name: string;
  email: string;
}

@Injectable()
export class LoginService {
  private isUserLogged = false;
  @Output() userSignedIn = new EventEmitter<User>();
  @Output() userLogOut = new EventEmitter();
  constructor(private httpClient: HttpClient) {}

  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem("token");
    return this.isUserLogged;
  }

  signIn(email: string, password: string) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    };

    let body = {
      email: email,
      password: password,
    };

    return this.httpClient
      .post("http://localhost:8080/loobia/api/user/login", body, {
        responseType: "text",
      })
      .subscribe((response) => {
        console.log("risultato response: " + response);
        localStorage.setItem("token", response);
      });
    return true;
  }

  logOut() {
    localStorage.removeItem("token");
    this.isUserLogged = false;
  }

  getUser(): User {
    const data = JSON.parse(localStorage.getItem("user"));
    let user = new User();
    if (data) {
      user.name = data["user_name"];
      user.email = data["email"];
    }
    return user;
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
