import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-toast2",
  templateUrl: "./my-toast2.component.html",
  styleUrls: ["./my-toast2.component.css"]
})
export class MyToast2Component implements OnInit {
  show = false;
  autohide = true;

  constructor() {}

  ngOnInit() {}
}
