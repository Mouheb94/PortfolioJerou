import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';

import { Skill, skills } from '../../data/portfolio-data';
import { PortfolioStateService } from '../../services/portfolio-state.service';

const CATEGORY_MAP: Record<string, string> = {
  Frontend: 'category-frontend',
  Backend: 'category-backend',
  Languages: 'category-languages',
  DevOps: 'category-devops',
};

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
})
export class SkillsSectionComponent {
  readonly state = inject(PortfolioStateService);
  private readonly doc = inject(DOCUMENT);

  readonly skills = skills;
  readonly selectedSkill = signal<Skill | null>(null);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedSkill()) {
      this.closeSkill();
    }
  }

  openSkill(skill: Skill): void {
    this.selectedSkill.set(skill);
    this.doc.body.classList.add('modal-open');
  }

  closeSkill(): void {
    this.selectedSkill.set(null);
    this.doc.body.classList.remove('modal-open');
  }

  categoryClass(category: string): string {
    return CATEGORY_MAP[category] ?? '';
  }

  trackBySkill(_: number, skill: Skill): string {
    return skill.id;
  }
}
