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


   bootstrap: any;


  cerrarSlide() {
  const menu = document.getElementById('verticalMenu');
  if (menu && menu.classList.contains('show')) {
    const collapse = new this.bootstrap.Collapse(menu, { toggle: true });
    collapse.hide();
  }
}



  protected title = 'curriculum';

 sidebarOpen = true;
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  esInicioActivo      = false;
  essobreMi           = false;
  esreclutadorActivo  = false;


  constructor(private router: Router) {
    this.router.events.subscribe(event => {

      this.esInicioActivo = this.router.url === '/inicio';
      this.essobreMi= this.router.url === '/sobremi'
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

  toggleSobreMi() {
    if (this.essobreMi) {
      // Ocultar: navega a ruta vacía
      this.router.navigateByUrl('/');
    } else {
      // Mostrar: navega a /inicio
      this.router.navigateByUrl('/sobremi');
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
