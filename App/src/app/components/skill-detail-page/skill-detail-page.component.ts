import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';

import { competencies } from '../../data/competencies-data';
import { projects } from '../../data/portfolio-data';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-skill-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skill-detail-page.component.html',
  styleUrl: './skill-detail-page.component.css',
})
export class SkillDetailPageComponent {
  readonly state = inject(PortfolioStateService);
  private readonly route = inject(ActivatedRoute);
  private readonly projectIds = new Set(projects.map((project) => project.id));

  private readonly skillId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  readonly selectedSkill = computed(() =>
    competencies.find((skill) => skill.id === this.skillId()) ?? null,
  );

  masteryScore(level: number): string {
    return `${Math.round(level / 10)}/10`;
  }

  competencyTypeLabel(domain: 'technical' | 'human'): string {
    return domain === 'technical' ? 'Competence technique' : 'Competence humaine';
  }

  projectRoute(fragment?: string): string[] {
    if (!fragment) {
      return ['/realisations'];
    }

    const projectId = fragment.startsWith('project-') ? fragment.slice('project-'.length) : fragment;

    if (this.projectIds.has(projectId)) {
      return ['/realisations', projectId];
    }

    return ['/realisations'];
  }
}
