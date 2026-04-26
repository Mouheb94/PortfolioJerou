import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Project, projects, skills } from '../../data/portfolio-data';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  readonly state = inject(PortfolioStateService);
  private readonly router = inject(Router);

  readonly projects = projects;

  openProject(project: Project): void {
    void this.router.navigate(['/realisations', project.id]);
  }

  getSkillName(skillId: string): string {
    return skills.find((s) => s.id === skillId)?.name ?? skillId;
  }

  trackByProject(_: number, project: Project): string {
    return project.id;
  }
}
