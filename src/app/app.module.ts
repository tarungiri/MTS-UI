import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./shared/page-not-found.component";
import { MedicineModule } from "./medicines/medicine.module";

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [BrowserModule, HttpClientModule, MedicineModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
