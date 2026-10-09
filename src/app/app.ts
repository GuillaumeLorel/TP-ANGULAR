import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// RouterLink permet la navigation côté client via les liens du menu - LOREL Guillaume
@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ModuleAngularTP3');
}
