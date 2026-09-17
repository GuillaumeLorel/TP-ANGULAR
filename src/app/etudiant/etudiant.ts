import {
  Component,
  ChangeDetectionStrategy,
  input,
  linkedSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  imports: [CommonModule],
  templateUrl: './etudiant.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './etudiant.scss',
})
export class Etudiant {
  nom = input<string>('');
  prenom = input<string>('');
  commentaire = input<string>('');
  present = input<boolean>(false);

  /**
   * Statut local de la fiche, initialisé depuis l'entrée `present`.
   * Les boutons (3.6) écrivent ici : la valeur du parent n'est donc plus
   * suivie tant que `present` ne change pas de valeur — c'est exactement la
   * limite décrite en 4.4, que les services corrigeront plus tard.
   */
  statut = linkedSignal(() => this.present());

  /** 4.1 - date de dernière modification du statut. */
  derniereModif = signal<Date | null>(null);

  /** 4.3 - nombre de fois où l'étudiant a été noté absent. */
  nbAbsences = signal<number>(0);

  /** 4.3 - le bouton « Absent » est ré-armé par un timer après chaque usage. */
  absentBloque = signal<boolean>(false);

  /** 3.1 - rouge si l'étudiant est absent, noir sinon. */
  getColorEtu(): string {
    return this.statut() ? 'black' : 'red';
  }

  rendPresent() {
    this.statut.set(true);
    this.derniereModif.set(new Date());
  }

  rendAbsent() {
    this.statut.set(false);
    this.derniereModif.set(new Date());
    this.nbAbsences.update((n) => n + 1);

    this.absentBloque.set(true);
    setTimeout(() => this.absentBloque.set(false), 5000);
  }
}
