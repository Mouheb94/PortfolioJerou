import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CompetencyDomain, competencies } from '../../data/competencies-data';
import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
})
export class SkillsSectionComponent {
  readonly state = inject(PortfolioStateService);
  private readonly router = inject(Router);

  readonly competencies = competencies;
  readonly missingLegacyAnchors = ['typescript', 'nodejs', 'react', 'tailwind', 'postgresql'];

  readonly rankedCompetencies = [...this.competencies].sort((a, b) => b.level - a.level);
  readonly technicalCompetencies = computed(() =>
    this.rankedCompetencies.filter((skill) => skill.domain === 'technical'),
  );
  readonly humanCompetencies = computed(() =>
    this.rankedCompetencies.filter((skill) => skill.domain === 'human'),
  );

  domainTitle(domain: CompetencyDomain): string {
    const locale = this.state.locale();
    if (domain === 'technical') {
      return locale === 'fr' ? 'Compétences techniques' : 'Technical competencies';
    }
    return locale === 'fr' ? 'Compétences humaines' : 'Human competencies';
  }

  masteryScore(level: number): string {
    return `${Math.round(level / 10)}/10`;
  }

  competencyTypeLabel(domain: CompetencyDomain): string {
    return domain === 'technical' ? 'Compétence technique' : 'Compétence humaine';
  }

  openSkill(id: string): void {
    void this.router.navigate(['/competences', id]);
  }
}
