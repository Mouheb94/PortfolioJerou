import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  readonly state = inject(PortfolioStateService);
}
