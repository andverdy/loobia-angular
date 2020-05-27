import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  //@ViewChild(ArticoliComponent) art: ArticoliComponent;
  //@Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  filter: string = "";

  constructor(public auth: LoginService, private route: Router) {}

  refresh() {
    //this.onRefresh.emit();
  }

  ngOnInit() {}
}
