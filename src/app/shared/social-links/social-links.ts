import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLink } from '../../models';

@Component({
  selector: 'app-social-links',
  imports: [CommonModule],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  links: SocialLink[] = [
    { url: 'https://linkedin.com', icon: '/img/shared/linkedin.svg', label: 'LinkedIn' },
    { url: 'https://github.com', icon: '/img/shared/github.svg', label: 'GitHub' },
    { url: 'mailto:contact@example.com', icon: '/img/shared/email.svg', label: 'Email' }
  ];
}
