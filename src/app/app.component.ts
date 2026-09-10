import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TP1';

  nomSeance: string = 'Séance TP 1';
  resumeSeance: string = "Prise en main d'Angular, première application";

  isAuth: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }

  rendTousPres() {
    console.log('Test : le bouton "Tous présents" a été cliqué');
  }
}
