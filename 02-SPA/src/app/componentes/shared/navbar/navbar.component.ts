import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../../servicios/heroes.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string){
    this._heroesService.buscarHeroes(termino);
  }

  termino = document.getElementById("txtBusqueda");
}
