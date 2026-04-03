import { Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  readonly state = inject(PortfolioStateService);
}
