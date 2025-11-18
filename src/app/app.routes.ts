import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

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
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
