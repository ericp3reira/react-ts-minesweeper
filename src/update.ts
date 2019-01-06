import { Game, Mine } from './domain';
import { traverseNeighbours, isMine } from './game';

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

export const updateZeros = (fields: Array<Array<Mine>>, start: Mine) => {
  traverseNeighbours(fields, start, (field => {
      if (!field.isOpened && !isMine(field)) {
          field.isOpened = true;
          if (field.bombs == 0) {
              updateZeros(fields, field);
          }
      }
      return field;
  }));
}