import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth {

  @Output() volver = new EventEmitter<void>();

  isRegistering = false;

  loginData = {
    username: '',
    password: ''
  };

  registerData = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  login() {
    console.log('🔐 Login:', this.loginData);
  }

  crearCuenta() {
    this.isRegistering = true;
  }

  volverAlLogin() {
    this.isRegistering = false; // 👈 Esto lo agregas también para volver al login
    this.volver.emit();
  }

  register() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('❌ Las contraseñas no coinciden');
      return;
    }

    console.log('✅ Registrado:', this.registerData);
    this.volverAlLogin(); // 👈 después de registrarse, regresa al login
  }
}
