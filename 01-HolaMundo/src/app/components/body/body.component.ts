import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: `./body.component.html`
})
export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'Targeta en el body',
        autor: 'Aitor Basarrate'
    }

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}