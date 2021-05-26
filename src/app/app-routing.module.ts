import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsModule } from './projects/projects.module';


const routes: Routes = [
  {
    path:  '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    loadChildren: () => ProjectsModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
