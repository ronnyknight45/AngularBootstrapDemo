import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbDatepickerModule, NgbDropdownModule, NgbToastModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyModalComponent } from './my-modal/my-modal.component';
import { FormsModule } from '@angular/forms';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { MyToastComponent } from './my-toast/my-toast.component';
import { MyToast2Component } from './my-toast2/my-toast2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent,
    MyDropdownComponent,
    MyToastComponent,
    MyToast2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbToastModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
