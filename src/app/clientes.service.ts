import { Injectable } from "@angular/core";
import { Cliente } from "./clientes/cliente";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = "Eduardo Tadeu";
    cliente.cpf = "1231231";

    return cliente;
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      "http://localhost:8080/api/clientes",
      cliente
    );
  }
}
