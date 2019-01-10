import { Game, Mine, Point } from '../domain';
import { update } from './update';

const BOMBS_PROB = 0.15;

const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

export const newGame = (
  rows: number,
  columns: number
): Game => {
  let totalMines = 0;
  let estimatedMines = Math.floor(rows * columns * BOMBS_PROB);

  const state = Array(rows).fill(null).map((r, i: number) => {
    return Array(columns).fill(null).map((c, j: number) => {
      return new Mine({x: i, y: j});
    });
  });

  while (totalMines < estimatedMines) {
    const randX = Math.floor(Math.random() * rows);
    const randY = Math.floor(Math.random() * columns);

    if (state[randX][randY].bombs !== -1) {
      totalMines++;
      state[randX][randY].bombs = -1;
    }
  }

  return new Game(state, totalMines);
}

export const traverseNeighbours = (
  fields: Array<Array<Mine>>,
  startMine: Mine,
  onField: (field: Mine) => Mine
) => {
  let inBounds = (point: Point) => {
    return point.x >= 0 && point.x < fields.length &&
    point.y >= 0 && point.y < fields[0].length;
  }
  const start = startMine.position;
  dx.map((x, i) => ({dx: x, dy: dy[i]}))
    .map(deltas => ({x: start.x + deltas.dx, y: start.y + deltas.dy}))
    .filter((point: Point) => inBounds(point))
    .map((point: Point) => onField(fields[point.x][point.y]));
}

export const isMine = (field: Mine): boolean => {
  return field.bombs === -1;
}

export const endGame = (game: Game): Game => {
  return update(game, (field) => {
    return new Mine(
      field.position,
      (!isMine(field) ? field.isOpened : true),
      field.bombs,
      field.isFlagged
    );
  }, true);
}

export const checkCompleted = (game: Game): boolean => {
  const and = (a: boolean, b: boolean) => a && b;
  return game.state.map(row => {
    return row.map(field => {
      return isMineCovered(field);
    }).reduce(and);
  }).reduce(and);
}

const isMineCovered = (field: Mine) => {
  return isMine(field) ? field.isFlagged : field.isOpened;
}
