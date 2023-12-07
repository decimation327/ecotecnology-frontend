import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorPrincipalComponent } from "../app/contenedor-principal/contenedor-principal.component";
import { ContenedorAgendaAdministradorComponent } from "../app/contenedor-agenda-administrador/contenedor-agenda-administrador.component";
import { ContenedorDetalleProductoComponent } from './contenedor-detalle-producto/contenedor-detalle-producto.component';
import {PaginaPrincipalAdministradorComponent} from'./pagina-principal-administrador/pagina-principal-administrador.component';
import { PaginaPrincipalUsuarioComponent } from './pagina-principal-usuario/pagina-principal-usuario.component';
import { ContenedorAgendaUsuarioComponent } from './contenedor-agenda-usuario/contenedor-agenda-usuario.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"home",component:ContenedorPrincipalComponent},
  {path:'Login',component:RegistroLoginComponent},
  {path:"Producto/:id", component:ContenedorDetalleProductoComponent},
  {path:"Administrador", component: PaginaPrincipalAdministradorComponent},
  {path:"Usuario",component:PaginaPrincipalUsuarioComponent},
  {path:"Agenda-Administrador",component:ContenedorAgendaAdministradorComponent},
  {path:"Agenda-Usuario",component:ContenedorAgendaUsuarioComponent},
  {path: "Carrito", component:CarritoComponent},
  { path: '**', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
