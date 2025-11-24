import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-project-pollo-loco',
  imports: [RouterLink, TranslateModule, Header],
  templateUrl: './project-pollo-loco.html',
  styleUrl: './project-pollo-loco.scss',
})
export class ProjectPolloLoco {
  projectTitle = 'El Pollo Loco';

  techStack = [
    { name: 'JavaScript', icon: '/img/skills/javascript.svg' },
    { name: 'HTML', icon: '/img/skills/html.svg' },
    { name: 'CSS', icon: '/img/skills/css.svg' }
  ];
}
