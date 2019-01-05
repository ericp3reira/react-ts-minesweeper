import { Game, Mine } from './domain';

export const update = (
  game: Game,
  f: ((b: Mine) => Mine),
  exploded = false
): Game => {
  const updated = game.state.slice().map(row => {
      return row.slice().map(field => {
          return f(field);
      });
  });
  return new Game(updated, game.totalBombs, game.exploded || exploded);
}