import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Usuario } from "./usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  username: string;
  password: string;
  cadastroUsuario: boolean;
  mensagemSucesso: string;
  errors: string[];

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    this.authService.tentarLogar(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/home"]);
      },
      (responseError) => {
        console.log(responseError);
        this.errors = ["Usuário e/ou senha incorreto(s)."];
      }
    );
  }

  cadastrarUsuario(event) {
    event.preventDefault();
    this.cadastroUsuario = true;
  }

  cancelaCadastro() {
    this.cadastroUsuario = false;
  }

  cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;

    this.authService.salvar(usuario).subscribe(
      (response) => {
        this.mensagemSucesso = "Cadastro realizado com sucesso!";
        this.errors = null;
        this.cadastroUsuario = false;
        this.username = "";
        this.password = "";
      },
      (responseError) => {
        this.mensagemSucesso = null;
        this.errors = responseError.error.errors;
      }
    );
  }
}
