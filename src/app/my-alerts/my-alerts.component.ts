import { Component, OnInit } from "@angular/core";
import { Alert } from "./alert";
import { ALERTS } from "./alerts.data";

@Component({
  selector: "app-my-alerts",
  templateUrl: "./my-alerts.component.html",
  styleUrls: ["./my-alerts.component.css"]
})
export class MyAlertsComponent implements OnInit {
  alertsArray: Alert[] = ALERTS;

  constructor() {
    this.resetAlerts();
  }

  ngOnInit() {}

  closeAlert(alert: Alert) {
    this.alertsArray.splice(this.alertsArray.indexOf(alert), 1);
  }

  resetAlerts() {
    this.alertsArray = Array.from(ALERTS);
  }
}
