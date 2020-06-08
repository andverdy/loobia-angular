import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  saluti = "Benvenuti nel sito Alphashop";
  titolo2 = "Seleziona gli articoli da acquistare";

  email = "";
  messaggio = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.params["email"];

    // console.log(this.messaggio);
  }

  handleResponse(response) {
    this.messaggio = response;
    console.log(response);
  }

  handleError(error) {
    this.messaggio = error.error.message;
  }
}
