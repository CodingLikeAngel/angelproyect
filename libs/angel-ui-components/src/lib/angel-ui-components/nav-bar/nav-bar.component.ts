import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
})
export class NavBarComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu(event: Event) {
    event.preventDefault(); // Previene cualquier comportamiento por defecto
    event.stopPropagation(); // Evita que el evento se propague al padre
    this.isMenuOpen = !this.isMenuOpen;
  }

  preventNavigation(event: Event) {
    event.preventDefault(); // Evita que el logo navegue por defecto
    event.stopPropagation();
    // Si quieres navegar a la raíz, descomenta:
    // this.router.navigate(['/']);
  }

  navigate(event: Event, path: string) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate([path]); // Navega usando Angular Router
  }

  navigateAndClose(event: Event, path: string) {
    event.preventDefault();
    event.stopPropagation();
    this.isMenuOpen = false; // Cierra el menú
    this.router.navigate([path]); // Navega usando Angular Router
  }
}