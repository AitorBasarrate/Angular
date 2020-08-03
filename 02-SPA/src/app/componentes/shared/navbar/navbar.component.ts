import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../../servicios/heroes.service";
import { Route, Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


  constructor(private _heroesService: HeroesService,
              private router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string){
    this.router.navigate(['/buscar', termino]);
    // this._heroesService.buscarHeroes(termino);
  }

  // termino = document.getElementById("txtBusqueda").nodeValue;
}
