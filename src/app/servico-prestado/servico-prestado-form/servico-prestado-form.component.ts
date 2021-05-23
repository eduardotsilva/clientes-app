import { Component, OnInit } from "@angular/core";
import { Cliente } from "../../clientes/cliente";
import { ClientesService } from "../../clientes.service";
import { ServicoPrestado } from "../servico-prestado";
import { ServicoPrestadoService } from "src/app/servico-prestado.service";

@Component({
  selector: "app-servico-prestado-form",
  templateUrl: "./servico-prestado-form.component.html",
  styleUrls: ["./servico-prestado-form.component.css"],
})
export class ServicoPrestadoFormComponent implements OnInit {
  clientes: Cliente[] = [];
  servicoPrestado: ServicoPrestado;
  success: boolean = false;
  errors: string[];

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) {
    this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit() {
    this.clienteService.getClientes().subscribe((response) => {
      this.clientes = response;
    });
  }

  onSubmit() {
    console.log(this.servicoPrestado);

    this.service.salvar(this.servicoPrestado).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.servicoPrestado = new ServicoPrestado();
        },
        (responseError) => {
          console.log(responseError);
          this.errors = responseError.error.errors;
          ;
        }
      );
  }
}
