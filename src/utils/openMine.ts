import { Game, Mine } from '../domain';
import { isMine, endGame } from './game';
import { update, updateZeros } from './update';

function openMine(game: Game, field: Mine): Game {
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
