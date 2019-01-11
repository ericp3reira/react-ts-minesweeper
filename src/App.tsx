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
    elapsedSeconds: 0,
    newgamemenu: false
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

  startGame(rows: number, columns: number) {
    this.setState({
      rows: rows,
      columns: columns,
      game: newGame(rows, columns),
      completed: false,
      flagged: 0,
      elapsedSeconds: 0
    });
  }

  toggleNewGameMenu() {
    this.setState({
      newgamemenu: !this.state.newgamemenu
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="display">
            <span className="icon">💣</span>
            <span className="counter">8</span>
          </div>
          <div className="time-display" onClick={() => this.toggleNewGameMenu()}>
            <Timer elapsedSeconds={0} />
            <div className={`newgame-menu ${this.state.newgamemenu ? 'active' : null}`}>
              <button onClick={(e) => this.startGame(8, 8)}>Easy</button>
              <button onClick={(e) => this.startGame(12, 12)}>Medium</button>
              <button onClick={(e) => this.startGame(16, 16)}>Hard</button>
            </div>
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
