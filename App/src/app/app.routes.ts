import { Routes } from '@angular/router';

import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ParcoursSectionComponent } from './components/parcours-section/parcours-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'accueil', component: HeroSectionComponent },
  { path: 'presentation', component: AboutSectionComponent },
  { path: 'parcours', component: ParcoursSectionComponent },
  { path: 'competences', component: SkillsSectionComponent },
  { path: 'realisations', component: ProjectsSectionComponent },
  { path: 'contact', component: ContactSectionComponent },
  { path: '**', redirectTo: 'accueil' },
];