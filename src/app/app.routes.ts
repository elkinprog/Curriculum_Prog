import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Reclutador } from './reclutador/reclutador';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Administrador } from './administrador/administrador';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [


{path: 'inicio' ,component: Inicio},
{path: 'reclutador' ,component: Reclutador},
{path: 'sobremi' ,component: SobreMi},
{path: 'administrador' ,component: Administrador,canActivate: [authGuard]},
{path: 'login',loadComponent: () =>import('./login-component/login-component').then((m) => m.LoginComponent),
}

];



