import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';
import { ParcoursDetailModalComponent } from '../parcours-detail-modal/parcours-detail-modal.component';
import { TimelineEntry } from '../../data/translations';

@Component({
  selector: 'app-parcours-section',
  standalone: true,
  imports: [CommonModule, ParcoursDetailModalComponent],
  templateUrl: './parcours-section.component.html',
  styleUrl: './parcours-section.component.css',
})
export class ParcoursSectionComponent {
  readonly state = inject(PortfolioStateService);

  selectedEntry: TimelineEntry | null = null;
  isModalOpen: boolean = false;

  openModal(entry: TimelineEntry): void {
    this.selectedEntry = entry;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedEntry = null;
    document.body.style.overflow = 'auto';
  }
}
