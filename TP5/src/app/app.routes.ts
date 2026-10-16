import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ConsultActivite } from './consult-activite/consult-activite';

// Routes de l'application - LOREL Guillaume
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'index.html', component: Home },
  { path: 'about', component: About },
  // :id = indice de l'activité dans le tableau du service
  { path: 'consultAct/:id', component: ConsultActivite },
];
