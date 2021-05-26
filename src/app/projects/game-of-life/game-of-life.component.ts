import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameCanvas } from './models/game-canvas.model';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.scss']
})
export class GameOfLifeComponent implements OnInit, OnDestroy {
  GameCanvas = GameCanvas;
  gameCanvas: GameCanvas;
  canvasContext: CanvasRenderingContext2D;

  constructor() {
  }

  ngOnInit() {
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    this.canvasContext = canvas.getContext('2d');
    this.gameCanvas = new GameCanvas(this.canvasContext);
  }

  ngOnDestroy() {
    delete this.gameCanvas;
  }
}
