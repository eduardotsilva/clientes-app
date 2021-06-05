import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServicoPrestado } from "./servico-prestado/servico-prestado";
import { environment } from "../environments/environment";
import { ServicoPrestadoBusca } from "./servico-prestado/servico-prestado-lista/servico-prestado-busca";

@Injectable({
  providedIn: "root",
})
export class ServicoPrestadoService {
  apiURL: string = environment.apiURLBase + "/api/servicos-prestados";
  tokenString = localStorage.getItem("access_token");
  token = JSON.parse(this.tokenString);

  headers = {
    Authorization: "Bearer " + this.token.access_token,
  };

  constructor(private http: HttpClient) {}

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado, {
      headers: this.headers,
    });
  }

  buscar(nome: string = "", mes: number =  0): Observable<ServicoPrestadoBusca[]> {
    
  
    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ? mes.toString() : "");

    const url = this.apiURL + "?" + httpParams.toString();

    return this.http.get<any>(url, {
      headers: this.headers,
    });
  }
}
