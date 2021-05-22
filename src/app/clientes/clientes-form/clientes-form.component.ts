import { Component, OnInit } from "@angular/core";
import { Cliente } from "../cliente";
import { ClientesService } from "../../clientes.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ɵangular_packages_platform_browser_platform_browser_g } from "@angular/platform-browser";

@Component({
  selector: "app-clientes-form",
  templateUrl: "./clientes-form.component.html",
  styleUrls: ["./clientes-form.component.css"],
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
  success: boolean = false;
  errors: string[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit() {
    let params = this.activatedRoute.params;

    params.subscribe((urlParams) => {
      this.id = urlParams["id"];

      if (this.id) {
        this.service.getClientesById(this.id).subscribe(
          (response) => {
            this.cliente = response;
          },
          (errorResponse) => {
            this.cliente = new Cliente();
          }
        );
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.cliente).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (responseError) => {
          this.errors = ["Erro ao atualizar o cliente"];
        }
      );
    } else {
      this.service.salvar(this.cliente).subscribe(
        (response) => {
          this.errors = [];
          this.success = true;
          this.cliente.id = response.id;
          this.cliente.dataCadastro = response.dataCadastro;
        },
        (responseError) => {
          this.success = false;
          this.errors = responseError.error.errors;
        }
      );
    }
  }

  voltarParaListagem() {
    this.router.navigate(["/clientes-lista"]);
  }

 
}
