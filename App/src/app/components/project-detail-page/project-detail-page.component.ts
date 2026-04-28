import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';

import { competencies } from '../../data/competencies-data';
import { projectDetails } from '../../data/project-details-data';
import { projects, skills } from '../../data/portfolio-data';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.css',
})
export class ProjectDetailPageComponent {
  readonly state = inject(PortfolioStateService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly projectId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  private readonly competencyIds = new Set(competencies.map((item) => item.id));

  readonly project = computed(() =>
    projects.find((item) => item.id === this.projectId()) ?? null,
  );

  readonly detail = computed(() =>
    projectDetails.find((item) => item.projectId === this.projectId()) ?? null,
  );

  isObjectiveSectionTitle(item: string): boolean {
    return /^\d+-/.test(item.trim());
  }

  isObjectiveBullet(item: string): boolean {
    return item.trim().startsWith('-');
  }

  formatObjectiveText(item: string): string {
    const value = item.trim();
    if (this.isObjectiveSectionTitle(value)) {
      return value.replace(/^\d+-\s*/, '');
    }
    if (this.isObjectiveBullet(value)) {
      return value.replace(/^-\s*/, '');
    }
    return value;
  }

  getSkillName(skillId: string): string {
    return skills.find((item) => item.id === skillId)?.name ?? skillId;
  }

  openSkill(skillId: string): void {
    if (this.competencyIds.has(skillId)) {
      void this.router.navigate(['/competences', skillId]);
      return;
    }
    void this.router.navigate(['/competences']);
  }
}
