import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface Letter {
  char: string;
  isUpperCase: boolean;
}

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  frontendLetters: Letter[] = this.splitIntoLetters('Frontend');
  developerLetters: Letter[] = this.splitIntoLetters('DEVELOPER');

  private splitIntoLetters(text: string): Letter[] {
    return text.split('').map(char => ({
      char: char,
      isUpperCase: char === char.toUpperCase() && char !== char.toLowerCase()
    }));
  }
}
