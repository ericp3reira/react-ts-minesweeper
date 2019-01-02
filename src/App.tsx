import React, { Component } from 'react';
import './App.css';
import { MineField } from './components/MineField';
import { Timer } from './components/Timer';
import { Mine, Game } from './domain';

class App extends Component {
  render() {
    const point = {x: 2, y: 2};
    const mine = new Mine(point);
    const game = new Game([[mine]]);
    const onLeftClick = () => {
      console.log('this');
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
