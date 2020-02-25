import React from 'react';
import { Component } from 'react';
import Tile from './Tile';

class Board extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board;
        const that = this;
        return (
            <div id="board">
                {this.renderRows()}
            </div>
        )
    }

    renderRows() {
        const board = this.props.board;
        return board.grid.map((row, i) => {
            return (
                <div className="board-row" key={`row-${i}`}>
                    {this.renderTiles(row, i)}
                </div>
            )
        })
    }

    renderTiles(row, i) {
        const board = this.props.board;
        return row.map((tile, j) => {
            <Tile tile={tile} updateGame={this.props.updateGame} key={i * board.gridSize + j}/>
        })
    }
}

export default Board;