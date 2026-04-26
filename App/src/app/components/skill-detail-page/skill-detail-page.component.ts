import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';

import { competencies } from '../../data/competencies-data';
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
}
