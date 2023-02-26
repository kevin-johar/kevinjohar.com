import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  resumeLink = 'https://drive.google.com/file/d/16Eoq4JaRvsGtdGg7sUTNrZwY71ap3ZnI/view?usp=sharing';

  constructor() { }

  ngOnInit(): void {
  }

}
