import { Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly state = inject(PortfolioStateService);
  readonly currentYear = new Date().getFullYear();
}
