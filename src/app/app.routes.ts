import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    title: 'Karl Heinzman - Frontend Developer'
  },
  {
    path: 'legal-notice',
    component: LegalNotice,
    title: 'Legal Notice - Karl Heinzman'
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
    title: 'Privacy Policy - Karl Heinzman'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
