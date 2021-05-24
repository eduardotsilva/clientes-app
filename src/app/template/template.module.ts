import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent} from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent
  ]
})
export class TemplateModule { }
