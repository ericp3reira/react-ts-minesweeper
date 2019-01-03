import React, { Component } from 'react';
import './App.css';
import { MineField } from './components/MineField';
import { Timer } from './components/Timer';
import { Mine } from './domain';

import { newGame } from './newGame';

class App extends Component {
  render() {
    const game = newGame(5, 5);
    const onLeftClick = (field: Mine) => {
      console.log(field);
    }

    const seconds = 127;

    return (
      <div className="App">
        <Timer elapsedSeconds={seconds} />
        <MineField game={game} onLeftClick={onLeftClick} />
      </div>
    );
  }
}

export default App;
