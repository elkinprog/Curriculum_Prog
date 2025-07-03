import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Reclutador } from './reclutador/reclutador';
import { SobreMi } from './sobre-mi/sobre-mi';

export const routes: Routes = [

{path: 'inicio' ,component: Inicio},
{path: 'reclutador' ,component: Reclutador},
{path: 'sobremi' ,component: SobreMi}



];


