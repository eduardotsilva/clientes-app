import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ClientesModule } from "./clientes/clientes.module";
import { TemplateModule } from "./template/template.module";
import { HomeComponent } from "./home/home.component";
import { ClientesService } from "./clientes.service";
import { ServicoPrestadoModule } from "./servico-prestado/servico-prestado.module";
import { ServicoPrestadoService } from "./servico-prestado.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [AppComponent, HomeComponent,LoginComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ClientesModule,
    TemplateModule,
    ServicoPrestadoModule,
  ],
  providers: [ClientesService, ServicoPrestadoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
