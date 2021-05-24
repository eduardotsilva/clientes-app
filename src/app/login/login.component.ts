import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  username: string;
  password: string;
  loginError: boolean;
  cadastroUsuario: boolean;

  constructor(
    private router:Router
  ) {}

  onSubmit() {
    console.log(`User: ${this.username}, pass: ${this.password}`);
    this.router.navigate(['/home'])
  }

  cadastrarUsuario(event) {
    event.preventDefault();
    this.cadastroUsuario = true;
  }

  cancelaCadastro() {
    this.cadastroUsuario = false;
  }
}
