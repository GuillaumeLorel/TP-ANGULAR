import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  imports: [],
  templateUrl: './etudiant.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './etudiant.component.scss',
})
export class EtudiantComponent {
  nom = input<string>('');
  prenom = input<string>('');
  statut = input<string>('absent');
}
