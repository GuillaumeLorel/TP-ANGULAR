import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  imports: [],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.scss',
})
export class EtudiantComponent {
  @Input() nom: string = '';
  @Input() prenom: string = '';
  @Input() statut: string = 'absent';
}
