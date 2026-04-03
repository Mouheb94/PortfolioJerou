import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';

import { TranslationSet } from '../../data/translations';
import { PortfolioStateService } from '../../services/portfolio-state.service';

type NavKey = keyof TranslationSet['nav'];

interface NavLink {
  key: NavKey;
  target: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly state = inject(PortfolioStateService);

  readonly navLinks: NavLink[] = [
    { key: 'accueil', target: 'accueil' },
    { key: 'presentation', target: 'presentation' },
    { key: 'parcours', target: 'parcours' },
    { key: 'competences', target: 'competences' },
    { key: 'realisations', target: 'realisations' },
    { key: 'contact', target: 'contact' },
  ];

  readonly scrolled = signal(false);
  readonly mobileOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.mobileOpen.set(false);
  }

  navigate(target: string): void {
    this.mobileOpen.set(false);
    this.state.scrollTo(target);
  }

  toggleMenu(): void {
    this.mobileOpen.update((v: boolean) => !v);
  }
}
