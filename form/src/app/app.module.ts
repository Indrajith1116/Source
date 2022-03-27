import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormssComponent } from './formss/formss.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DilogComponent } from './dilog/dilog.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    FormssComponent,
    DilogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule, BrowserAnimationsModule,MatDialogModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
