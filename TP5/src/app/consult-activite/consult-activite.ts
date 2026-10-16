// LOREL Guillaume

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  id: number;
  enEdition: boolean = false;
  titreEdition: string = '';

  constructor(
    private route: ActivatedRoute,
    private monRouteur: Router,
    public activiteService: ActiviteService,
  ) {
    // Récupération de l'indice transmis dans l'URL (consultAct/:id)
    this.id = Number(this.route.snapshot.params['id']);
  }

  get activite(): string | undefined {
    return this.activiteService.objectifs[this.id];
  }

  supprimeElem(index: number): void {
    this.activiteService.removeItem(index);
    this.monRouteur.navigate(['']);
  }

  modifierElem(): void {
    this.titreEdition = this.activite ?? '';
    this.enEdition = true;
  }

  sauvegarderElem(index: number): void {
    this.activiteService.updateItem(index, this.titreEdition);
    this.enEdition = false;
  }

  retour(): void {
    this.monRouteur.navigate(['']);
  }
}
