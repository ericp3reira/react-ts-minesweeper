import React, { Component } from 'react';
import './App.css';
import { MineField } from './components/MineField';
import { Timer } from './components/Timer';
import { Mine, Game } from './domain';

import { newGame } from './utils/game';

class App extends Component<AppProps> {
  controlDown = false;
  // startTime: Date;
  
  state = {
    rows: this.props.rows,
    columns: this.props.columns,
    game: newGame(this.props.rows, this.props.columns),
    completed: false,
    flagged: 0,
    elapsedSeconds: 0
  };

  isControlKey(code: string) {
    return code === 'ControlLeft' || code === 'ControlLeft';
  }

  timer: any;

  componentDidMount() {
    document.onkeydown = (e: KeyboardEvent) => {
      if (this.isControlKey(e.code)) this.controlDown = true;
    }
    document.onkeyup = (e: KeyboardEvent) => {
      if (this.isControlKey(e.code)) this.controlDown = false;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="display">
            <span className="icon">💣</span>
            <span className="counter">8</span>
          </div>
          <div className="time-display">
            {/* <Timer elapsedSeconds={seconds} /> */}
          </div>
          <div className="display">
            <span className="counter">8</span>
            <span className="icon">🚩</span>
          </div>
        </header>
        <main className="App-grid">
          <MineField game={this.state.game} onLeftClick={() => console.log('this')} />
        </main>
        <footer>
          Built with <span className="icon">☕️</span> by @ericp3reira
        </footer>
      </div>
    );
  }
}

export default App;

export interface AppProps {
  rows: number;
  columns: number;
}
