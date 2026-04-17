import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

import { Locale, TranslationSet, translations } from '../data/translations';

@Injectable({ providedIn: 'root' })
export class PortfolioStateService {
  private readonly doc = inject(DOCUMENT);

  readonly locale = signal<Locale>('fr');
  readonly darkTheme = signal<boolean>(this.readTheme());
  readonly t = computed<TranslationSet>(() => translations);

  constructor() {
    effect(() => {
      this.doc.documentElement.classList.toggle('dark', this.darkTheme());
      localStorage.setItem('portfolio-theme', this.darkTheme() ? 'dark' : 'light');
    });

    effect(() => {
      this.doc.documentElement.lang = this.locale();
    });
  }

  toggleTheme(): void {
    this.darkTheme.update((v: boolean) => !v);
  }

  scrollTo(id: string): void {
    this.doc.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private readTheme(): boolean {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light') return false;
      if (saved === 'dark') return true;
    } catch { /* SSR safe */ }
    return true;
  }
}
