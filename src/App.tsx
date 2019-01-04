import React, { Component } from 'react';
import './App.css';
import { MineField } from './components/MineField';
import { Timer } from './components/Timer';
import { Mine } from './domain';

import { newGame } from './newGame';

class App extends Component {
  render() {
    const grid = newGame(16, 16);
    const onLeftClick = (field: Mine) => {
      console.log(field);
    }

    const seconds = 127;

    return (
      <div className="App">
        <header className="App-header">
          <div className="display">
            <span className="icon">💣</span>
            <span className="counter">8</span>
          </div>
          <div className="time-display">
            <Timer elapsedSeconds={seconds} />
          </div>
          <div className="display">
            <span className="counter">8</span>
            <span className="icon">🚩</span>
          </div>
        </header>
        <main className="App-grid">
          <MineField game={grid} onLeftClick={onLeftClick} />
        </main>
        <footer>
          Built with <span className="icon">☕️</span> by @ericp3reira
        </footer>
      </div>
    );
  }
}

export default App;
