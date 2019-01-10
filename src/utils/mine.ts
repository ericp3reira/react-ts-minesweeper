import { Game, Mine } from '../domain';
import { isMine, endGame } from './game';
import { update, updateZeros } from './update';
import { exploreOpenedField } from './explore';

export const openMine = (game: Game, field: Mine): Game => {
  if (field.isFlagged) return game;
  
  if (!field.isFlagged && isMine(field)) return endGame(game);
    
  const openField = (openedField: Mine) => (field: Mine) => {
    return new Mine(
      field.position,
      (field === openedField) || field.isOpened,
      field.bombs,
      field === openedField ? false : field.isFlagged
    );
  };

  let result = update(game, openField(field));
  if (field.bombs == 0) {
    updateZeros(result.state, field);
  }
  return result;
}

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

