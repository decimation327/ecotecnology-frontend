import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-contenedor-detalle-producto',
  templateUrl: './contenedor-detalle-producto.component.html',
  styleUrls: ['./contenedor-detalle-producto.component.css']
})
export class ContenedorDetalleProductoComponent implements AfterViewInit{

  constructor(private route: ActivatedRoute,  private http: HttpClient) {}
  productos = [
    {id: 1, nombre: "Chasis Atx Gamer",  cantidad: 1, precio: 1100000, img:'https://res.cloudinary.com/dspugxtgr/image/upload/v1687838964/chasis1_ybimv5.jpg',descripcion:'"El chasis ATX Gamer es un gabinete diseñado para los entusiastas del gaming. Con capacidad para placas base ATX y amplio espacio interno.',InfoAdic:'es una excelente opción para los entusiastas de los videojuegos. Con un diseño atractivo, buena refrigeración y capacidad de personalización, ofrece un espacio amplio para componentes de alto rendimiento.',resena:'El chasis ATX Gamer es ideal para gamers exigentes. Con diseño atractivo'}
  ];

  inputQuantity: HTMLInputElement | undefined;
  btnIncrement: HTMLElement | null = null;
  btnDecrement: HTMLElement | null = null;
  toggleDescription: HTMLElement | null = null;
  toggleAdditionalInformation: HTMLElement | null = null;
  toggleReviews: HTMLElement | null = null;
  contentDescription: HTMLElement | null = null;
  contentAdditionalInformation: HTMLElement | null = null;
  contentReviews: HTMLElement | null = null;
  valueByDefault: number = 1;


  ngAfterViewInit() {
    this.inputQuantity = document.querySelector('.input-quantity') as HTMLInputElement;
    this.btnIncrement = document.querySelector('#increment');
    this.btnDecrement = document.querySelector('#decrement');
    this.toggleDescription = document.querySelector('.title-description');
    this.toggleAdditionalInformation = document.querySelector('.title-additional-information');
    this.toggleReviews = document.querySelector('.title-reviews');
    this.contentDescription = document.querySelector('.text-description');
    this.contentAdditionalInformation = document.querySelector('.text-additional-information');
    this.contentReviews = document.querySelector('.text-reviews');

    if (this.btnIncrement && this.btnDecrement) {
      this.btnIncrement.addEventListener('click', () => {
        this.valueByDefault += 1;
        if (this.inputQuantity) {
          this.inputQuantity.value = this.valueByDefault.toString();
        }
      });

      this.btnDecrement.addEventListener('click', () => {
        if (this.valueByDefault === 1) {
          return;
        }
        this.valueByDefault -= 1;
        if (this.inputQuantity) {
          this.inputQuantity.value = this.valueByDefault.toString();
        }
      });
    }

    if (this.toggleDescription) {
      this.toggleDescription.addEventListener('click', () => {
        if (this.contentDescription) {
          this.contentDescription.classList.toggle('hidden');
        }
      });
    }

    if (this.toggleAdditionalInformation) {
      this.toggleAdditionalInformation.addEventListener('click', () => {
        if (this.contentAdditionalInformation) {
          this.contentAdditionalInformation.classList.toggle('hidden');
        }
      });
    }

    if (this.toggleReviews) {
      this.toggleReviews.addEventListener('click', () => {
        if (this.contentReviews) {
          this.contentReviews.classList.toggle('hidden');
        }
      });
    }
  }

}
