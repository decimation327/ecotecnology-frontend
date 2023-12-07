import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems = [
    { name: 'Producto 1', price: 20 },
    { name: 'Producto 2', price: 30 },
  ];
  
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
  
  checkout(): void {
    console.log('Realizar proceso de pago aquí');
  }
}
