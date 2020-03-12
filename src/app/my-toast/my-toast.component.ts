import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-toast",
  templateUrl: "./my-toast.component.html",
  styleUrls: ["./my-toast.component.css"]
})
export class MyToastComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  show = true;
  autohide = true;

  close() {
    this.show = false;
    setTimeout(() => (this.show = true), 5000);
  }
}
