import { Game, Mine } from './domain';

const BOMBS_PROB = 0.15;

// const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
// const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

export const newGame = (rows: number, columns: number): Game => {
  let totalMines = 0;
  let estimatedMines = Math.floor(rows * columns * BOMBS_PROB);

  const state = Array(rows).fill(null).map((r, i: number) => {
    return Array(columns).fill(null).map((c, j: number) => {
      return new Mine(
        {x: i, y: j},
        false,
        0,
        false
      );
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