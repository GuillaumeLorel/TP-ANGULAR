// LOREL Guillaume

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  id: string;
  id2: string;

  constructor(private route: ActivatedRoute) {
    // Récupération des paramètres transmis dans l'URL (consultAct/:id/:id2)
    this.id = this.route.snapshot.params['id'];
    this.id2 = this.route.snapshot.params['id2'];
  }
}
