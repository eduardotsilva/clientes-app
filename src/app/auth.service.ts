import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "./login/usuario";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiURL: string = environment.apiURLBase + "/api/usuarios";
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;

  constructor(private http: HttpClient) {}

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post(this.apiURL, usuario);
  }

  tentarLogar(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set("username", username.trim())
      .set("password", password.trim())
      .set("grant_type", "password");

    const headers = {
      "Content-Type":"application/x-www-form-urlencoded",
      "Authorization":"Basic " + btoa(`${this.clientId}:${this.clientSecret}`),
      
    };

    console.log(headers);
    console.log(params);
    console.log(`username ${username} pass ${password}`);

    return this.http.post(this.tokenURL, params.toString(), {
      headers: headers,
    });
  }
}
