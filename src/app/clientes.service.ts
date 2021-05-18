import { Injectable } from "@angular/core";
import { Cliente } from "./clientes/cliente";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      "http://localhost:8080/api/clientes",
      cliente
    );
  }

  /*
  getClientes(): Observable<Cliente[]> {
    return null;
  }
*/
  getClientes(): Cliente[] {
    let cliente = new Cliente();
    cliente.id  = "1";
    cliente.nome = "Eduardo";
    cliente.cpf = "1231231";
    cliente.dataCadastro = "28/12/1990"
    return [cliente];
  }
}
