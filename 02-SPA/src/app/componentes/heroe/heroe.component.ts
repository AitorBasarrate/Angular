import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTING } from "../../app.routes";
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {

  };

  
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) { 
  
    this.activatedRoute.params.subscribe(params => {
        console.log(params['id']);
        this.heroe = this._heroesService.getHeroe(params['id']);
      });
      
   }

   verHeroes(){
    this.router.navigate(['/heroes']);
  }
  

   ngOnInit(): void{

   };
    
  

}
