import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  usuarioLogado: string;

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuarioLogado = this.service.getUsuarioAutenticado();
  }

  logout() {
    this.service.encerrarSessao();
    this.router.navigate(["/login"]);
  }
}
