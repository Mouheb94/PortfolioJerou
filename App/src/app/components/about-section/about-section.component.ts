import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';

type AboutKey = 'p1' | 'p2' | 'p3';
type IconKey = 'code' | 'palette' | 'zap';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {
  readonly state = inject(PortfolioStateService);

  readonly cards: Array<{ icon: IconKey; textKey: AboutKey }> = [
    { icon: 'code', textKey: 'p1' },
    { icon: 'palette', textKey: 'p2' },
    { icon: 'zap', textKey: 'p3' },
  ];

  iconHref(icon: IconKey): string {
    return { code: '#i-code', palette: '#i-palette', zap: '#i-zap' }[icon];
  }
}
