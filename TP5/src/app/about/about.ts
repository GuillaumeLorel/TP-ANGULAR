// LOREL Guillaume

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  constructor(
    private monRouteur: Router,
    public activiteService: ActiviteService,
  ) {}

  consulterActivite(index: number): void {
    this.monRouteur.navigate(['consultAct', index]);
  }
}
