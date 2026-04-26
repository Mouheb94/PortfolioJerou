import { Routes } from '@angular/router';

import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ParcoursSectionComponent } from './components/parcours-section/parcours-section.component';
import { ProjectDetailPageComponent } from './components/project-detail-page/project-detail-page.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SkillDetailPageComponent } from './components/skill-detail-page/skill-detail-page.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'accueil', component: HeroSectionComponent },
  { path: 'presentation', component: AboutSectionComponent },
  { path: 'parcours', component: ParcoursSectionComponent },
  { path: 'competences', component: SkillsSectionComponent },
  { path: 'competences/:id', component: SkillDetailPageComponent },
  { path: 'realisations', component: ProjectsSectionComponent },
  { path: 'realisations/:id', component: ProjectDetailPageComponent },
  { path: 'contact', component: ContactSectionComponent },
  { path: '**', redirectTo: 'accueil' },
];