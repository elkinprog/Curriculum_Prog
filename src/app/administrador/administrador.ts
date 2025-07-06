import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './administrador.html',
  styleUrl: './administrador.scss',
})
export class Administrador implements OnInit {

  constructor(private auth: Auth, private router: Router) {}

  tiempoRestante = 3600;
  minutos: string = '60';
  segundos: string = '00';
  intervalo: any;

  reclutadores = [
    { nombre: 'Juan Pérez', empresa: 'Claro', correo: 'juan@claro.com' },
    { nombre: 'Ana Gómez', empresa: 'Movistar', correo: 'ana@movistar.com' }
  ];

  isLoggedIn = false;
  mostrarRegistro = false;

  loginData = {
    username: '',
    password: ''
  };

  adminName = '';

  ngOnInit(): void {
    this.iniciarContador();
    this.isLoggedIn = true; // ✅ Asume que si entró ya está autenticado
  }

  login() {
    this.isLoggedIn = true;
    this.mostrarRegistro = false;
  }

  crearCuenta() {
    this.mostrarRegistro = true;
  }

  cerrarRegistro() {
    this.mostrarRegistro = false;
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

  iniciarContador() {
    this.intervalo = setInterval(() => {
      this.tiempoRestante--;

      const mins = Math.floor(this.tiempoRestante / 60);
      const secs = this.tiempoRestante % 60;

      this.minutos = mins < 10 ? '0' + mins : '' + mins;
      this.segundos = secs < 10 ? '0' + secs : '' + secs;

      if (this.tiempoRestante <= 0) {
        clearInterval(this.intervalo);
        this.logout(); // Cierra sesión automáticamente
      }
    }, 1000);
  }

  cerrarToast() {
    const el = document.getElementById('sessionToast');
    if (el) el.style.display = 'none';
  }

  logout() {
    clearInterval(this.intervalo);
    signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.error('❌ Error al cerrar sesión:', error);
    });
  }
}


