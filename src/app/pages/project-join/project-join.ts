import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-project-join',
  imports: [RouterLink, TranslateModule, Header],
  templateUrl: './project-join.html',
  styleUrl: './project-join.scss',
})
export class ProjectJoin {
  projectTitle = 'Join';

  techStack = [
    { name: 'CSS', icon: '/img/skills/css.svg' },
    { name: 'HTML', icon: '/img/skills/html.svg' },
    { name: 'Firebase', icon: '/img/skills/firebase.svg' },
    { name: 'Angular', icon: '/img/skills/angular.svg' },
    { name: 'TypeScript', icon: '/img/skills/typescript.svg' }
  ];
}
