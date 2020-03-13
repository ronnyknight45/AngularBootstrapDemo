import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  NgbModalModule,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbToastModule,
  NgbAlertModule,
  NgbDateAdapter,
  NgbDateParserFormatter
} from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyModalComponent } from "./my-modal/my-modal.component";
import { FormsModule } from "@angular/forms";
import { MyDropdownComponent } from "./my-dropdown/my-dropdown.component";
import { MyToastComponent } from "./my-toast/my-toast.component";
import { MyToast2Component } from "./my-toast2/my-toast2.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { CustomFormatDatepickerComponent } from "./custom-format-datepicker/custom-format-datepicker.component";
import { MyAlertsComponent } from "./my-alerts/my-alerts.component";
import { CustomDatepickerFormatService } from "./services/custom-datepicker-format.service";
import { CustomDateParserFormatterService } from "./services/custom-date-parser-formatter.service";

@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent,
    MyDropdownComponent,
    MyToastComponent,
    MyToast2Component,
    DatepickerComponent,
    CustomFormatDatepickerComponent,
    MyAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbToastModule,
    NgbAlertModule,
    FormsModule
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomDatepickerFormatService },
    {
      provide: NgbDateParserFormatter,
      useClass: CustomDateParserFormatterService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
