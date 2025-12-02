import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../models/project.model';
import { ProjectDataService } from '../../services/project-data.service';
import { ProjectCard } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  private projectDataService = inject(ProjectDataService);
  projects: Project[] = [];

  ngOnInit() {
    this.projects = this.projectDataService.getAllProjects();
  }
}
