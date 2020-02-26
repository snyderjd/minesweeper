import React from 'react';
import { Component } from 'react';
import * as Minesweeper from '../MinesweeperModule';
import Board from './Board';

class Game extends Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9, 6);
        this.state = {
            board: board
        }

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    restartGame() {
        const board = new Minesweeper.Board(9, 10)
        this.setState({ board: board })
    }

    updateGame = (tile, isFlagged) => {
        if (isFlagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board })
    }

    render() {
        let modal;
        if (this.state.board.lost() || this.state.board.won()) {
            const text = this.state.board.won() ? "You won!" : "You lost!";
            modal = 
                <div className="modal-screen">
                    <div className="modal-content">
                        <p>{text}</p>
                        <button onClick={this.restartGame}>Play Again</button>
                    </div>
                </div>
        }
        return (
            <div className="game-component">
                <h1>Minesweeper</h1>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }
}

export default Game;