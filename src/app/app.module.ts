import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormParentComponent } from "./form-parent/form-parent.component";
import { FormElementComponent } from "./form-element/form-element.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, FormParentComponent, FormElementComponent],
  imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, MatInputModule, MatSelectModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
