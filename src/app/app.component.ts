import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EtudiantComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TP1';

  nomSeance: string = 'Séance TP 1';
  resumeSeance: string = "Prise en main d'Angular, première application";

  isAuth: boolean = false;

  statutEtudiants = signal<string>('absent');

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }

  rendTousPres() {
    this.statutEtudiants.set('présent');
    console.log('Tous les étudiants sont maintenant présents');
  }
}
