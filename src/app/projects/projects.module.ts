import { NgModule } from '@angular/core';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { ProjectsRouting } from './projects.routing';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    GameOfLifeComponent,
  ],
  imports: [
    ProjectsRouting
  ]
})
export class ProjectsModule { }
