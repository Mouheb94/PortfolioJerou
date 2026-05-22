import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineEntry } from '../../data/translations';
import { projects } from '../../data/portfolio-data';
import { competencies } from '../../data/competencies-data';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector : 'app-parcours-detail-modal',
  standalone : true,
  imports : [CommonModule],
  templateUrl : './parcours-detail-modal.component.html',
  styleUrl : './parcours-detail-modal.component.css',
})
export class ParcoursDetailModalComponent {
  @Input() entry : TimelineEntry | null = null;
  @Input() isOpen : boolean = false;
  @Output() close = new EventEmitter<void>();

  readonly state = inject(PortfolioStateService);
  private readonly router = inject(Router);
  private readonly projectIdByTitle = new Map(
    projects.map((project) => [this.normalize(project.title.fr), project.id] as const),
  );

  onClose() : void {
    this.close.emit();
  }

  openRelatedSkillsPage(event : Event, skillName : string) : void {
    event.preventDefault();
    this.onClose();
    const skillId = this.getSkillId(skillName);
    setTimeout(() => {
      if (skillId) {
        void this.router.navigate(['/competences', skillId]);
      } else {
        void this.router.navigate(['/competences']);
      }
    }, 0);
  }

  getSkillId(skillName : string) : string | undefined {
    const found = competencies.find((c) => c.name === skillName);
    return found?.id;
  }

  openRelatedProject(event : Event, projectName : string) : void {
    event.preventDefault();
    this.onClose();

    const projectId = this.projectIdByTitle.get(this.normalize(projectName));
    setTimeout(() => {
      if (projectId) {
        void this.router.navigate(['/realisations', projectId]);
        return;
      }
      void this.router.navigate(['/realisations']);
    }, 0);
  }

  private normalize(value : string) : string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .trim()
      .toLowerCase();
  }

  onBackdropClick(event : MouseEvent) : void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
