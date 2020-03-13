import { Component, OnInit } from "@angular/core";
import { NgbCalendar, NgbDateAdapter } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-custom-format-datepicker",
  templateUrl: "./custom-format-datepicker.component.html",
  styleUrls: ["./custom-format-datepicker.component.css"]
})
export class CustomFormatDatepickerComponent implements OnInit {
  date1: string;
  date2: string;

  constructor(
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>
  ) {}

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday());
  }

  ngOnInit() {}
}
