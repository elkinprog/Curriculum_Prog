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
  @Output() volver = new EventEmitter<void>();  // 🔁 Evento para cerrar el componente desde el padre

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
    // Aquí podrías emitir otro evento para loguear automáticamente
  }

  crearCuenta() {
    this.isRegistering = true;
  }

  volverAlLogin() {
    this.isRegistering = false;
  }

  register() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('❌ Las contraseñas no coinciden');
      return;
    }

    console.log('✅ Registrado:', this.registerData);
    // Simula éxito y cierra el formulario
    this.volver.emit();
  }
}
