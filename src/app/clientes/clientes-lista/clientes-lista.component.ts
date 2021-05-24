import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../../clientes.service";
import { Cliente } from "../cliente";
import { Router } from "@angular/router";

@Component({
  selector: "app-clientes-lista",
  templateUrl: "./clientes-lista.component.html",
  styleUrls: ["./clientes-lista.component.css"],
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;
  errors: string[];

  constructor(private service: ClientesService, private router: Router) {}

  ngOnInit() {
    this.service.getClientes().subscribe(
      (response) => {
        this.clientes = response;
      },
      (responseError) => {}
    );
  }

  novoCadastro() {
    this.router.navigate(["/clientes/form"]);
  }

  selecionaClienteDelete(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deleteCliente() {
    console.log(this.clienteSelecionado);
    this.service.deleteCliente(this.clienteSelecionado).subscribe(
      (response) => {
        this.mensagemSucesso = "Cliente deletado com sucesso!";
        this.ngOnInit();
      },
      (responseErro) => {
        this.errors = responseErro.error.errors;
      }
    );
  }
}
