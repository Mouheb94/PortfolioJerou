import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

import { Locale, TranslationSet, translations } from '../data/translations';

@Injectable({ providedIn: 'root' })
export class PortfolioStateService {
  private readonly doc = inject(DOCUMENT);

  readonly locale = signal<Locale>(this.readLocale());
  readonly darkTheme = signal<boolean>(this.readTheme());
  readonly t = computed<TranslationSet>(() => translations[this.locale()]);

  constructor() {
    effect(() => {
      this.doc.documentElement.classList.toggle('dark', this.darkTheme());
      localStorage.setItem('portfolio-theme', this.darkTheme() ? 'dark' : 'light');
    });

    effect(() => {
      this.doc.documentElement.lang = this.locale();
      localStorage.setItem('portfolio-locale', this.locale());
    });
  }

  toggleLocale(): void {
    this.locale.update((v: Locale) => (v === 'fr' ? 'en' : 'fr'));
  }

  toggleTheme(): void {
    this.darkTheme.update((v: boolean) => !v);
  }

  scrollTo(id: string): void {
    this.doc.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private readLocale(): Locale {
    try {
      const saved = localStorage.getItem('portfolio-locale');
      return saved === 'en' ? 'en' : 'fr';
    } catch {
      return 'fr';
    }
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
