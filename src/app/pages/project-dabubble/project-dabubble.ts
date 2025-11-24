import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-project-dabubble',
  imports: [RouterLink, TranslateModule, Header],
  templateUrl: './project-dabubble.html',
  styleUrl: './project-dabubble.scss',
})
export class ProjectDabubble {
  projectTitle = 'DABubble';

  techStack = [
    { name: 'JavaScript', icon: '/img/skills/javascript.svg' },
    { name: 'HTML', icon: '/img/skills/html.svg' },
    { name: 'CSS', icon: '/img/skills/css.svg' }
  ];
}
