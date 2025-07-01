import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';






@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

  constructor(private router:Router){}

  ngOnInit(): void {

    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd && event.url === '/') {
          console.log('inicio cargado');
      }

    })

  }

}
