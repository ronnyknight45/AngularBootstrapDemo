import { Component, OnInit } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbDate
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-my-modal",
  templateUrl: "./my-modal.component.html",
  styleUrls: ["./my-modal.component.css"]
})
export class MyModalComponent implements OnInit {
  closeResult: string;
  savedDate: NgbDate;
  formSubmitted: boolean = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(content) {
    this.modalService
      .open(content, {
        backdrop: "static"
      })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  saveTheDate() {
    console.log(this.savedDate);
    this.formSubmitted = true;
  }

}
