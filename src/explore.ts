import { Game, Mine } from './domain';
import { update, updateZeros } from './update';
import { traverseNeighbours, isMine, endGame } from './game';

export function exploreOpenedField(game: Game, opened: Mine): Game {
  const updated = update(game, (field: Mine) => field);
  let hitMine = false;
  traverseNeighbours(updated.state, opened, field => {
    if (!field.isOpened && !field.isFlagged) {
      if (isMine(field)) {
        hitMine = true;
      } else {
        field.isOpened = true;
        if (field.bombs == 0) {
          updateZeros(updated.state, field);
        }
      }
    }
    return field;
  });
  if (hitMine) {
    return endGame(game);
  }
  return updated;
}
