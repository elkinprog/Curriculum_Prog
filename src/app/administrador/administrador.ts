import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from "../login-component/login-component";

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,LoginComponent],
  templateUrl: './administrador.html',
  styleUrl: './administrador.scss'
})
export class Administrador {

  constructor(private router: Router) {}


  [x: string]: any;

   reclutadores = [
    { nombre: 'Juan Pérez', empresa: 'Claro', correo: 'juan@claro.com' },
    { nombre: 'Ana Gómez', empresa: 'Movistar', correo: 'ana@movistar.com' }
  ];

  isLoggedIn      = false;
  mostrarRegistro = false;

  loginData = {
    username: '',
    password: ''
  };

  adminName = '';

  login() {
    this.isLoggedIn      = true;
    this.mostrarRegistro = false;
  }

  crearCuenta() {
    this.mostrarRegistro = true;
  }

  cerrarRegistro() {
  this.mostrarRegistro = false; // ✅ El hijo puede cerrar con un evento
}

  onFileSelected(event: any) {
    console.log('Archivo seleccionado:', event.target.files[0]);
  }

  uploadPDF() {
    console.log('Subiendo PDF...');
  }

  updateName() {
    console.log('Nombre actualizado:', this.adminName);
  }

  eliminarRegistro(i: number) {
    this.reclutadores.splice(i, 1);
  }

  logout() {
  this.isLoggedIn = false;
  this.mostrarRegistro = false;
  this.router.navigate(['/inicio']); // ✅ Redirige al componente "inicio"
}

}


