import { Game, Mine } from './domain';

const BOMBS_PROB = 0.15;

// const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
// const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

export const newGame = (rows: number, columns: number): Game => {
  let totalMines = 0;
  let estimatedMines = Math.floor(rows * columns * BOMBS_PROB);

  const state = Array(rows).fill(null).map((r, i: number) => {
    return Array(columns).fill(null).map((c, j: number) => {
      const isMine = Math.random() < BOMBS_PROB;
      totalMines += isMine ? 1 : 0;
      return new Mine(
        {x: i, y: j},
        false,
        (isMine ? -1 : 0),
        false
      );
    });
  });

  return new Game(state, totalMines);
}