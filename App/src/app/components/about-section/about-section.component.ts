import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';

interface AboutCard {
  title: string;
  description: string;
  paragraphs?: string[];
  interests?: Array<{
    title: string;
    description: string;
  }>;
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {
  readonly state = inject(PortfolioStateService);

  get cards(): AboutCard[] {
    const cards = this.state.t().about.cards;

    return [
      {
        title: cards[0].title,
        description: cards[0].description,
        paragraphs: cards[0].paragraphs,
      },
      { title: cards[1].title, description: cards[1].description },
      { title: cards[2].title, description: cards[2].description },
      { title: cards[3].title, description: cards[3].description },
      {
        title: cards[4].title,
        description: cards[4].description,
        interests: cards[4].interests,
      },
    ];
  }
}
