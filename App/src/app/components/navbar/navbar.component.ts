import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, inject, signal } from '@angular/core';
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
export class NavbarComponent implements OnDestroy {
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
    this.setMobileMenu(false);
  }

  ngOnDestroy(): void {
    this.setMobileMenu(false);
  }

  closeMenu(): void {
    this.setMobileMenu(false);
  }

  navigate(route: string): void {
    this.setMobileMenu(false);
    void this.router.navigateByUrl(route);
  }

  navigateToSkill(skillId: string): void {
    this.setMobileMenu(false);
    this.suppressSkillsHover.set(true);
    (document.activeElement as HTMLElement | null)?.blur();
    window.setTimeout(() => this.suppressSkillsHover.set(false), 260);
    void this.router.navigate(['/competences', skillId]);
  }

  navigateToCompetencesPage(): void {
    this.suppressSkillsHover.set(true);
    (document.activeElement as HTMLElement | null)?.blur();
    window.setTimeout(() => this.suppressSkillsHover.set(false), 260);
    this.navigate('/competences');
  }

  toggleMenu(): void {
    this.setMobileMenu(!this.mobileOpen());
  }

  private setMobileMenu(open: boolean): void {
    this.mobileOpen.set(open);
    document.body.classList.toggle('mobile-nav-open', open);
  }
}
