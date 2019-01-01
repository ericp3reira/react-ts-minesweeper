import React from 'react';
import { Mine } from '../domain';

export const MineSquare = (props: MineProps) => {
  const { field, index, onLeftClick } = props;
  return (
    <button
      className={`mine-button ${!field.isOpened ? 'mine-opened' : null}`}
      tabIndex={index}
      onClick={() => onLeftClick(field)}
    >
      { renderField(field) }
    </button>
  );
};

const renderField = (field: Mine) => {
  if (field.isOpened && field.bombs > 0) {
    return <span className={`bombs-${field.bombs}`}>{field.bombs}</span>;
  }
  if (field.isOpened && field.bombs == 0) {
    return '';
  } 
  if (field.isOpened && field.bombs < 0) {
    return <i className="fas fa-xs fa-bomb bomb" />;
  }
  if (!field.isOpened && field.isFlagged) {
    return <i className="fas fa-xs fa-flag" />;
  }

  return '';
};

export interface MineProps {
  index: number;
  field: Mine;
  onLeftClick: (field: Mine) => void;
};