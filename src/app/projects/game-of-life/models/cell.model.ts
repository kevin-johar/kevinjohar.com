export class Cell {
  // Number of pixels on either side of each grid cell
  static size = 10;

  private x: number;
  private y: number;
  private context: CanvasRenderingContext2D;
  alive: boolean;
  nextAlive: boolean;

  constructor(context: CanvasRenderingContext2D, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.context = context;

    // Randomly assigns alive/dead value to begin
    this.alive = Math.random() > 0.5;
  }

  draw() {
    this.context.fillStyle = this.alive ? '#69995b' : '#e28f8f';
    this.context.fillRect(this.x * Cell.size, this.y * Cell.size, Cell.size, Cell.size);
  }
}
