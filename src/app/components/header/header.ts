import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SocialLinks } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, SocialLinks],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);
  currentLang: string = 'en';
  menuOpen: boolean = false;

  constructor() {
    this.translate.use(this.currentLang);
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }
}
