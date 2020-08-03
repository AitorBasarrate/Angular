import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../servicios/heroes.service";
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTING } from "../../app.routes";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  heroe:any = {

  };

  heroes:any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router) { }

ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.heroe = this._heroesService.buscarHeroes(params['termino']);
      });
  }

verHeroes(){
this.router.navigate(['/buscar/:termino']);
}

  

}
