import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  readonly state = inject(PortfolioStateService);
  private readonly router = inject(Router);

  navigate(route: string): void {
    void this.router.navigateByUrl(route);
  }
}
