import { Component, OnInit } from "@angular/core";
import { Cliente } from "../cliente";
import { ClientesService } from "../../clientes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-clientes-form",
  templateUrl: "./clientes-form.component.html",
  styleUrls: ["./clientes-form.component.css"],
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
  success: boolean = false;
  errors: string[];

  constructor(private service: ClientesService, 
              private router: Router) {
    this.cliente = new Cliente();
  }

  ngOnInit() {}

  onSubmit() {
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

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista']);
  }

}
