import { NgModule } from '@angular/core';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { ProjectsRouting } from './projects.routing';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    GameOfLifeComponent,
    ProjectComponent
  ],
  imports: [
    ProjectsRouting,
    CommonModule,
  ]
})
export class ProjectsModule { }
