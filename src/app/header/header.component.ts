import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  resumeLink = 'https://drive.google.com/file/d/1SdGmD8kcSPgOb4utwaPN9J1WOdiVNYym/view?usp=sharing';

  constructor() { }

  ngOnInit(): void {
  }

}
