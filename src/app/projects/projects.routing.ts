import { RouterModule, Routes } from '@angular/router';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
    children: [
      {
        path: '',
        component: GameOfLifeComponent
      },
      {
        path: 'life',
        component: GameOfLifeComponent
      }
    ]
  },
];

export const ProjectsRouting = RouterModule.forChild(projectRoutes);
