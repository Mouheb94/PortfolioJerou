import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { competencies } from '../../data/competencies-data';
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
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly state = inject(PortfolioStateService);
  private readonly router = inject(Router);
  readonly suppressSkillsHover = signal(false);

  readonly navLinks: NavLink[] = [
    { key: 'accueil', route: '/accueil' },
    { key: 'presentation', route: '/presentation' },
    { key: 'parcours', route: '/parcours' },
    { key: 'competences', route: '/competences' },
    { key: 'realisations', route: '/realisations' },
    { key: 'contact', route: '/contact' },
  ];
  readonly technicalSkillLinks = competencies
    .filter((item) => item.domain === 'technical')
    .map((item) => ({ id: item.id, name: item.name }));
  readonly humanSkillLinks = competencies
    .filter((item) => item.domain === 'human')
    .map((item) => ({ id: item.id, name: item.name }));

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

  navigate(route: string): void {
    this.mobileOpen.set(false);
    void this.router.navigateByUrl(route);
  }

  navigateToSkill(skillId: string): void {
    this.mobileOpen.set(false);
    this.suppressSkillsHover.set(true);
    (document.activeElement as HTMLElement | null)?.blur();
    window.setTimeout(() => this.suppressSkillsHover.set(false), 260);
    void this.router.navigate(['/competences', skillId]);
  }

  toggleMenu(): void {
    this.mobileOpen.update((v: boolean) => !v);
  }
}
