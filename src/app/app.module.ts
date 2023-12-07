import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorPrincipalComponent } from './contenedor-principal/contenedor-principal.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoPaginaPrincipalComponent } from './contenido-pagina-principal/contenido-pagina-principal.component';
import { ContenedorAgendaAdministradorComponent } from './contenedor-agenda-administrador/contenedor-agenda-administrador.component';
import { ContenedorAgendaUsuarioComponent } from './contenedor-agenda-usuario/contenedor-agenda-usuario.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';
import { PaginaPrincipalUsuarioComponent } from './pagina-principal-usuario/pagina-principal-usuario.component';
import { PaginaPrincipalAdministradorComponent } from './pagina-principal-administrador/pagina-principal-administrador.component';
import { ContenedorDetalleProductoComponent } from './contenedor-detalle-producto/contenedor-detalle-producto.component';
import { NavAdministradorComponent } from './nav-administrador/nav-administrador.component';
import { NavUsuarioComponent } from './nav-usuario/nav-usuario.component';
import { CarritoComponent } from './carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    ContenedorPrincipalComponent,
    NavComponent,
    FooterComponent,
    ContenidoPaginaPrincipalComponent,
    ContenedorAgendaAdministradorComponent,
    ContenedorAgendaUsuarioComponent,
    RegistroLoginComponent,
    PaginaPrincipalUsuarioComponent,
    PaginaPrincipalAdministradorComponent,
    ContenedorDetalleProductoComponent,
    NavAdministradorComponent,
    NavUsuarioComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
