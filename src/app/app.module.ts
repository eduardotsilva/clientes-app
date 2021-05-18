import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ClientesModule } from "./clientes/clientes.module";

import { TemplateModule } from "./template/template.module";
import { HomeComponent } from "./home/home.component";
import { ClientesService } from "./clientes.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HomeComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClientesModule,
    TemplateModule,
    ClientesModule,
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
