import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido-pagina-principal',
  templateUrl: './contenido-pagina-principal.component.html',
  styleUrls: ['./contenido-pagina-principal.component.css']
})
export class ContenidoPaginaPrincipalComponent {

  productos = [
    {id: 1, nombre: "Chasis Atx Gamer",  cantidad: 1, precio: 1100000, img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838964/chasis1_ybimv5.jpg'},
    {id: 2, nombre: "Chasis Gamer Gear",  cantidad: 1, precio: 160000, img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838964/chasis2_wixexq.jpg'},
    {id: 3, nombre: "Monitor gamer Asus",  cantidad: 1, precio: 140000,img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838965/monitor3_sv8foi.jpg'},
    {id: 4, nombre: "Msi Optix Monitor",  cantidad: 1, precio: 150000, img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838965/monitor2_kujrwp.jpg'},
    {id: 5, nombre: "SILLA V30 VERSUS",  cantidad: 1, precio: 15000, img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838967/silla2_phpxnt.jpg'},
    {id: 6, nombre: "SILLA V40 VERSUS",  cantidad: 1, precio: 17500, img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838967/silla1_cmzlxf.jpg'},
    {id: 7, nombre: "RTX 4090 GAMING",  cantidad: 1, precio: 190000,img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838965/grafica1_mn47sh.jpg'},
    {id: 8, nombre: "PREDATOR REDRAGON",  cantidad: 1, precio: 9000, img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838966/mouse1_oyf64f.jpg'},
    {id: 9, nombre: "PREDATOR REDRAGON",  cantidad: 1, precio: 95000, img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838967/teclado1_vu9vrb.jpg'},
  ];

  constructor() { }
  
}



