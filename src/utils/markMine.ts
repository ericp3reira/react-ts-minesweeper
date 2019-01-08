import { Game, Mine } from '../domain';
import { update } from './update';
import { exploreOpenedField } from './explore';

export const markMine = (game: Game, opened: Mine): Game => {
  if (opened.isOpened && !opened.isFlagged)
    return exploreOpenedField(game, opened);
  return update(game, (field: Mine) => {
    return new Mine(
      field.position,
      field == opened ? false : field.isOpened,
      field.bombs,
      field == opened ? !field.isFlagged : field.isFlagged
    );
  });
};
