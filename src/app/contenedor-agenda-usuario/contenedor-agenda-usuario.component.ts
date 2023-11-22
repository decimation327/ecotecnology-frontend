import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-contenedor-agenda-usuario',
  templateUrl: './contenedor-agenda-usuario.component.html',
  styleUrls: ['./contenedor-agenda-usuario.component.css']
})
export class ContenedorAgendaUsuarioComponent {
  generatePDF() {
    const product = (<HTMLInputElement>document.getElementById('product')).value;
    const date = (<HTMLInputElement>document.getElementById('date')).value;
    const time = (<HTMLInputElement>document.getElementById('time')).value;
    const electronicComponent = (<HTMLInputElement>document.getElementById('electronicComponent')).value;
    const damage = (<HTMLInputElement>document.getElementById('damage')).value;
    const address = (<HTMLInputElement>document.getElementById('address')).value;

    const content = `
      Producto: ${product}
      Fecha: ${date}
      Hora: ${time}
      Componente Electrónico: ${electronicComponent}
      Descripción del daño: ${damage}
      Dirección: ${address}
    `;

    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save('agendamiento_citas.pdf');
  }
}
