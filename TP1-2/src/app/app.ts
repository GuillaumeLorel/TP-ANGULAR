import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Etudiant } from './etudiant/etudiant';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, Etudiant],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  title = 'TP1';

  nomSeance: string = 'Séance TP 2';
  resumeSeance: string =
    'Données dynamiques et structures de documents';

  /** 1.3 - liaison à double sens avec le champ <input>. */
  commentaireSeance: string = '';

  isAuth: boolean = false;

  /** 2.3 - tableau des étudiants parcouru par *ngFor. */
  tabEtudiant = [
    { nom: 'Lorel', prenom: 'Guillaume', present: false },
    { nom: 'Dupont', prenom: 'Jean', present: true },
    { nom: 'Martin', prenom: 'Sophie', present: false },
    { nom: 'Bernard', prenom: 'Camille', present: true },
    { nom: 'Petit', prenom: 'Lucas', present: false },
  ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 3000);
  }

  rendTousPres() {
    for (const etudiant of this.tabEtudiant) {
      etudiant.present = true;
    }
  }

  /**
   * 4.4 - symétrique de `rendTousPres`. Attention : une fiche dont le statut a
   * déjà été modifié via ses propres boutons ne suit plus le tableau, donc
   * elle peut rester inchangée. C'est la limite que les services résoudront.
   */
  rendTousAbs() {
    for (const etudiant of this.tabEtudiant) {
      etudiant.present = false;
    }
  }
}
