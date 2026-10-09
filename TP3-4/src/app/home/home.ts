// LOREL Guillaume

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  nbItems: number = 4;
  btnText: string = 'Envoyer';
  objectifText: string = '';
  objectifs: string[] = [];

  constructor(private monRouteur: Router) {}

  ngOnInit(): void {
    this.nbItems = this.objectifs.length;
  }

  ajoutItem(): void {
    this.objectifs.push(this.objectifText);
    this.nbItems = this.objectifs.length;

    // Redirection vers la page about 1 seconde après l'ajout d'un item
    setTimeout(() => {
      this.monRouteur.navigate(['about']);
    }, 1000);
  }
}
