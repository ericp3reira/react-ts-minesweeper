import React, { Component } from 'react';
import './App.css';
import { MineField } from './components/MineField';
import { Mine, Game } from './domain';

class App extends Component {
  render() {
    const point = {x: 2, y: 2};
    const mine = new Mine(point);
    const game = new Game([[mine]]);
    const onLeftClick = () => {
      console.log('this');
    }

    return (
      <div className="App">
        <MineField game={game} onLeftClick={onLeftClick} />
      </div>
    );
  }
}

export default App;
