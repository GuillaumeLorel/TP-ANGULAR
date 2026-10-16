// LOREL Guillaume

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  btnText: string = 'Envoyer';
  objectifText: string = '';

  // Le service est public pour que le template accède directement au tableau partagé
  constructor(
    private monRouteur: Router,
    public activiteService: ActiviteService,
  ) {}

  get nbItems(): number {
    return this.activiteService.objectifs.length;
  }

  ajoutItem(): void {
    this.activiteService.objectifs.push(this.objectifText);

    // Redirection vers la page about 1 seconde après l'ajout d'un item
    setTimeout(() => {
      this.monRouteur.navigate(['about']);
    }, 1000);
  }

  consulterActivite(index: number): void {
    this.monRouteur.navigate(['consultAct', index]);
  }
}
