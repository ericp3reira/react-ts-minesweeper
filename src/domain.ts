export interface Point {
  x: number;
  y: number;
};

export class Mine {
  constructor(
    public position: Point,
    public isOpened = false,
    public bombs = 0,
    public isFlagged = false
  ) {}
};

export class Game {
  constructor(
    public state: Array<Array<Mine>>,
    public totalBombs = 0,
    public exploded = false
  ) {}
};
