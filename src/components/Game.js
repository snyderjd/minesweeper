import React from 'react';
import { Component } from 'react';
import Minesweeper from '../MinesweeperModule';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board = new Minesweeper.Board()
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame = () => {

    }

    render() {
        return (
            <div className="game-component">
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }
}

export default Game;