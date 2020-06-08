import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { User } from "../model/User";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  token = sessionStorage.getItem("token");

  getRole(email: string) {
    let params = new HttpParams().set("email", email);

    let httpHeaders = new HttpHeaders().set("authorization", this.token);

    return this.httpClient
      .get("/api/role/by-email", {
        responseType: "text",
        params: params,
        headers: httpHeaders,
      })
      .pipe(
        map((response) => {
          sessionStorage.setItem("ruolo", response);
        })
      );
  }
}
