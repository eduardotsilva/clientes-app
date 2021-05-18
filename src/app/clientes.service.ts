import { Injectable } from "@angular/core";
import { Cliente } from "./clientes/cliente";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  constructor(private http: HttpClient) {
    
  }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = "Eduardo Tadeu";
    cliente.cpf = "1231231";

    return cliente;
  }
}
