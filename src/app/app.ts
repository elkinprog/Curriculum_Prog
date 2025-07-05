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
  esAdministrador     = false;
  esAuth              = false;


  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      this.esInicioActivo     = this.router.url === '/inicio';
      this.essobreMi          = this.router.url === '/sobremi'
      this.esreclutadorActivo = this.router.url === '/reclutador'
      this.esreclutadorActivo = this.router.url === '/administrador'
    });
  }

  toggleInicio() {
    if (this.esInicioActivo) {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/inicio');
    }
  }

  toggleSobreMi() {
    if (this.essobreMi) {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/sobremi');
    }
  }

  toggleReclutador() {
    if (this.esreclutadorActivo) {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/reclutador');
    }
  }

  toggleAdministrador() {
    if (this.esAdministrador) {
      this.router.navigateByUrl('/');
    } else {
    this.router.navigateByUrl('/administrador');
    // this.router.navigateByUrl('/auth');
    }
  }

}
