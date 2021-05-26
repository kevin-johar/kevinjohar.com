import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects: Project[] = [
    {
      name: 'John  Conway\'s Game of Life',
      description: 'a 0-player game that makes you think about life and death',
      routerLink: ['life'],
      img: {
        src: '/assets/projects/game-of-life.gif',
        alt: 'John Conway\'s Game of Life'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
