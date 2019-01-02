import React, { Component } from 'react';
import './App.css';
import { MineField } from './components/MineField';
import { Mine, Game } from './domain';

import { secondsToString } from './utils/time';

class App extends Component {
  render() {
    const point = {x: 2, y: 2};
    const mine = new Mine(point);
    const game = new Game([[mine]]);
    const onLeftClick = () => {
      console.log('this');
    }

    const seconds = 7;
    console.log(secondsToString(seconds));

    return (
      <div className="App">
        <MineField game={game} onLeftClick={onLeftClick} />
      </div>
    );
  }
}

export default App;
