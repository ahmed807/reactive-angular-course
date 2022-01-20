import { Component, OnInit } from "@angular/core";

import { LoadingService } from "./loading.service";
import { Observable } from "rxjs";

@Component({
  selector: "loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent implements OnInit {
  //making the service  public to be accessible by the template of the  component
  constructor(public loadingService: LoadingService) {}

  ngOnInit() {}
}
