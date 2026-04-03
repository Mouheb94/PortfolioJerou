import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-parcours-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parcours-section.component.html',
  styleUrl: './parcours-section.component.css',
})
export class ParcoursSectionComponent {
  readonly state = inject(PortfolioStateService);
}
