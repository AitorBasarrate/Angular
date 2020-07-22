import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);