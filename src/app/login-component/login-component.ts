import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {

  isRegister = false;
  email = '';
  password = '';
  confirm = '';
  nombre = '';

  constructor(public auth: AuthService, private router: Router) {}

  toggleMode() {
    this.isRegister = !this.isRegister;
  }

  submit() {
    if (this.isRegister) {
      if (this.password !== this.confirm) {
        return alert('❌ Las contraseñas no coinciden');
      }

      this.auth.register(this.email, this.password, this.nombre)
        .then(() => {
          alert('✅ Cuenta creada');
          this.router.navigate(['/administrador']);
        })
        .catch(err => alert('❌ ' + err.message));
    } else {
      this.login();
    }
  }

  login() {
    this.auth.login(this.email, this.password)
      .then(() => {
        alert('✅ Login exitoso');
        this.router.navigate(['/administrador']);
      })
      .catch(err => alert('❌ ' + err.message));
  }

  resetPassword() {
    if (!this.email) {
      alert('📧 Ingresa tu correo para recuperar la contraseña');
      return;
    }

    const auth = getAuth();
    sendPasswordResetEmail(auth, this.email)
      .then(() => alert('📨 Se envió un enlace de recuperación a tu correo'))
      .catch(err => alert('❌ ' + err.message));
  }
}
