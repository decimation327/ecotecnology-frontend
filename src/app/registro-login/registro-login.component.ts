import { Component, Renderer2, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})

export class RegistroLoginComponent implements OnInit{
  nombre!: string;
  apellido!: string;
  email!: string;
  contrasena!: string;
  tipo_persona!: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private http: HttpClient,
    private router: Router
  ) {}

  register() {
    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      contraseña: this.contrasena,
      tipo_persona: this.tipo_persona
    };

    if (usuario.nombre && usuario.apellido && usuario.tipo_persona) {
      // Registro de usuario
      // TODO: Aplicar encriptación o hashing a la contraseña antes de almacenarla en la base de datos
      this.http.post('http://localhost:10101/Login', usuario).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Status === 'Registro exitoso') {
            // Registro exitoso, realizar acciones adicionales si es necesario
          } else {
            // Error en el servidor
          }
        },
        (error: any) => {
          console.log(error);
          // Manejar errores
        }
      );
    } else {
      // Inicio de sesión
      this.http.post('http://localhost:10101/Login', usuario).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Status === 'Inicio de sesión exitoso') {
            const redireccion = response.Redireccion;
  
              this.router.navigate(['/Usuario']);

          } else {
            // Credenciales incorrectas
          }
        },
        (error: any) => {
          console.log(error);
          // Manejar errores
        }
      );
    }
  }
  ngOnInit() {
    this.$signIn = this.elementRef.nativeElement.querySelector('.sign-in');
    this.$signUp = this.elementRef.nativeElement.querySelector('.sign-up');
  }




  private $signIn!: HTMLElement;
  private $signUp!: HTMLElement;


  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const btnSignIn = this.elementRef.nativeElement.querySelector('.sign-in-btn');
    const btnSignUp = this.elementRef.nativeElement.querySelector('.sign-up-btn');

    if (target === btnSignIn || target === btnSignUp) {
      this.$signIn.classList.toggle('active');
      this.$signUp.classList.toggle('active');
    }
  }
  
}

