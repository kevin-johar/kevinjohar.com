import { Cell } from './cell.model';

export class GameCanvas {
  private static columns = 75;
  private static rows = 40;

  static canvasWidth = GameCanvas.columns * Cell.size;
  static canvasHeight = GameCanvas.rows * Cell.size;

  // [y-axis][x-axis]
  cells: Cell[][] = [];

  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;

    this.setupCanvas();

    this.gameLoop();
  }

  setupCanvas() {
    for (let y = 0; y < GameCanvas.rows; y++) {
      this.cells[y] = [];
      for (let x = 0; x < GameCanvas.columns; x++) {
        this.cells[y][x] = new Cell(this.context, x, y);
      }
    }
  }

  gameLoop() {
    for (let y = 0; y < GameCanvas.rows; y++) {
      for (let x = 0; x < GameCanvas.columns; x++) {
        const numAlive: number = this.checkSurroundingCells(x, y);
        const cell = this.cells[y][x];

        // Only change what needs to be changed
        if (!cell.alive && numAlive === 3) {
          cell.nextAlive = true;
        } else if (cell.alive && (numAlive < 2 || numAlive > 3)) {
          cell.nextAlive = false;
        }
      }
    }

    this.drawNextGeneration();

    setTimeout(() => {
      this.gameLoop();
    }, 100);
  }

  drawNextGeneration() {
    for (let y = 0; y < GameCanvas.rows; y++) {
      for (let x = 0; x < GameCanvas.columns; x++) {
        this.cells[y][x].alive = this.cells[y][x].nextAlive;
        this.cells[y][x].draw();
      }
    }
  }

  checkSurroundingCells(x, y): number {
    /* Cells to Check
     * [A1 A2 A3]
     * [B1 C  B2]
     * [C1 C2 C3]
     */
    return this.isAlive(x - 1, y - 1) + this.isAlive(x, y - 1) + this.isAlive(x + 1, y - 1) +
      this.isAlive(x - 1, y) + this.isAlive(x + 1, y) +
      this.isAlive(x - 1, y + 1) + this.isAlive(x, y + 1) + this.isAlive(x + 1, y + 1);
  }

  isAlive(x, y): number {
    if (x < 0 || x >= GameCanvas.columns || y < 0 || y >= GameCanvas.rows) {
      return 0;
    }
    return this.cells[y][x].alive ? 1 : 0;
  }

}
