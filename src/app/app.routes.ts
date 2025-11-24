import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { ProjectJoin } from './pages/project-join/project-join';
import { ProjectPolloLoco } from './pages/project-pollo-loco/project-pollo-loco';
import { ProjectDabubble } from './pages/project-dabubble/project-dabubble';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    title: 'Quoc Nam Tran - Frontend Developer'
  },
  {
    path: 'legal-notice',
    component: LegalNotice,
    title: 'Legal Notice - Quoc Nam Tran'
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
    title: 'Privacy Policy - Quoc Nam Tran'
  },
  {
    path: 'projects/join',
    component: ProjectJoin,
    title: 'Join - Project - Quoc Nam Tran'
  },
  {
    path: 'projects/pollo-loco',
    component: ProjectPolloLoco,
    title: 'El Pollo Loco - Project - Quoc Nam Tran'
  },
  {
    path: 'projects/dabubble',
    component: ProjectDabubble,
    title: 'DABubble - Project - Quoc Nam Tran'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
