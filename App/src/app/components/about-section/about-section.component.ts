import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';

interface AboutCard {
  title : string;
  description : string;
  paragraphs? : string[];
  interests? : Array<{
    title : string;
    description : string;
  }>;
}

@Component({
  selector : 'app-about-section',
  standalone : true,
  imports : [CommonModule],
  templateUrl : './about-section.component.html',
  styleUrl : './about-section.component.css',
})
export class AboutSectionComponent {
  readonly state = inject(PortfolioStateService);
  private readonly importantTerms = [
    'Harmonie Mutuelle',
    'MSPE',
    'alternance',
    'testeur automaticien',
    'qualite logicielle',
    'fiabilite',
    'automatisation',
    'tests automatises',
    'tests fonctionnels',
    'non-regression',
    'TNR',
    'responsable qualite',
    'certification ISTQB',
    'DevOps',
    'rigueur',
    'esprit critique',
    'autonomie',
    'travail en equipe',
    'amelioration continue',
    'diplôme de Master Expert en Ingénierie Logicielle',
    'pipelines CI/CD',
    'qualite du code',
  ];

  get cards() : AboutCard[] {
    const cards = this.state.t().about.cards;

    return [
      {
        title : cards[0].title,
        description : cards[0].description,
        paragraphs : cards[0].paragraphs,
      },
      {
        title : cards[1].title,
        description : cards[1].description,
        paragraphs : cards[1].paragraphs,
      },
      {
        title : cards[2].title,
        description : cards[2].description,
        paragraphs : cards[2].paragraphs,
      },
      {
        title : cards[3].title,
        description : cards[3].description,
        paragraphs : cards[3].paragraphs,
      },
      {
        title : cards[4].title,
        description : cards[4].description,
        interests : cards[4].interests,
      },
    ];
  }

  emphasizeImportantWords(text : string) : string {
    if (!text) {
      return '';
    }

    return this.importantTerms.reduce((result, term) => {
      const pattern = this.buildAccentInsensitivePattern(term);
      return result.replace(pattern, '<strong>$&</strong>');
    }, text);
  }

  private buildAccentInsensitivePattern(term : string) : RegExp {
    const normalized = term
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

    const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const withSpaces = escaped.replace(/\s+/g, '[\\s-]+');
    const accentAware = withSpaces
      .replace(/a/g, '[aàáâãäå]')
      .replace(/e/g, '[eèéêë]')
      .replace(/i/g, '[iìíîï]')
      .replace(/o/g, '[oòóôõö]')
      .replace(/u/g, '[uùúûü]')
      .replace(/c/g, '[cç]')
      .replace(/'/g, "['’]");

    return new RegExp(accentAware, 'gi');
  }
}
