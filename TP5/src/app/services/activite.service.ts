// LOREL Guillaume

import { Injectable } from '@angular/core';

// providedIn: 'root' : une seule instance du service partagée par toute l'application,
// pas besoin de l'ajouter dans un tableau providers
@Injectable({
  providedIn: 'root',
})
export class ActiviteService {
  // Tableau centralisé, partagé par tous les composants qui injectent le service
  objectifs: string[] = [];

  removeItem(index: number): void {
    this.objectifs.splice(index, 1);
  }

  updateItem(index: number, titre: string): void {
    this.objectifs[index] = titre;
  }
}
