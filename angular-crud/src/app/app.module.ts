import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AdminModule} from "./admin/admin.module";
import {MainModule} from "./main/main.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
