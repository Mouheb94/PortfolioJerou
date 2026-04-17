import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslationSet } from '../../data/translations';
import { PortfolioStateService } from '../../services/portfolio-state.service';

type NavKey = keyof TranslationSet['nav'];

interface NavLink {
  key: NavKey;
  route: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly state = inject(PortfolioStateService);

  readonly navLinks: NavLink[] = [
    { key: 'accueil', route: '/accueil' },
    { key: 'presentation', route: '/presentation' },
    { key: 'parcours', route: '/parcours' },
    { key: 'competences', route: '/competences' },
    { key: 'realisations', route: '/realisations' },
    { key: 'contact', route: '/contact' },
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

  closeMenu(): void {
    this.mobileOpen.set(false);
  }

  toggleMenu(): void {
    this.mobileOpen.update((v: boolean) => !v);
  }
}
