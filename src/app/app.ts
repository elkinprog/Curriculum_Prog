import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


  protected title = 'curriculum';

 sidebarOpen = true;
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  esInicioActivo      = false;
  esreclutadorActivo  = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {

      this.esInicioActivo = this.router.url === '/inicio';
      this.esreclutadorActivo= this.router.url === '/reclutador'

    });
  }

  toggleInicio() {
    if (this.esInicioActivo) {
      // Ocultar: navega a ruta vacía
      this.router.navigateByUrl('/');
    } else {
      // Mostrar: navega a /inicio
      this.router.navigateByUrl('/inicio');
    }
  }

  toggleReclutador() {
    if (this.esreclutadorActivo) {
      // Ocultar: navega a ruta vacía
      this.router.navigateByUrl('/');
    } else {
      // Mostrar: navega a /inicio
      this.router.navigateByUrl('/reclutador');
    }
  }




}
