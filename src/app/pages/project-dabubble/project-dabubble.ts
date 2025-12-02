import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Project } from '../../models/project.model';
import { ProjectDataService } from '../../services/project-data.service';

@Component({
  selector: 'app-project-dabubble',
  imports: [RouterLink, TranslateModule, Header, CommonModule],
  templateUrl: './project-dabubble.html',
  styleUrl: './project-dabubble.scss',
})
export class ProjectDabubble implements OnInit {
  private projectDataService = inject(ProjectDataService);
  project?: Project;

  ngOnInit() {
    this.project = this.projectDataService.getProjectById('dabubble');
  }
}
