import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';

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
  private readonly doc = inject(DOCUMENT);

  readonly projects = projects;
  readonly selectedProject = signal<Project | null>(null);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProject()) {
      this.closeProject();
    }
  }

  openProject(project: Project): void {
    this.selectedProject.set(project);
    this.doc.body.classList.add('modal-open');
  }

  closeProject(): void {
    this.selectedProject.set(null);
    this.doc.body.classList.remove('modal-open');
  }

  jumpToSkill(skillId: string): void {
    this.closeProject();
    window.setTimeout(() => {
      const el = this.doc.getElementById(`skill-${skillId}`);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('skill-highlight');
      window.setTimeout(() => el.classList.remove('skill-highlight'), 2000);
    }, 220);
  }

  getSkillName(skillId: string): string {
    return skills.find((s) => s.id === skillId)?.name ?? skillId;
  }

  trackByProject(_: number, project: Project): string {
    return project.id;
  }
}
