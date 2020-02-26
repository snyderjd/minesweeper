import React from 'react';
import { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        const isFlagged = event.altKey ? true : false
        this.props.updateGame(this.props.tile, isFlagged);
    }
    
    render() {
        const tile = this.props.tile;
        let klass, text, count;
        if (tile.explored) {
            if (tile.bombed) {
                klass="bombed";
                text = "\u2622";
            } else {
                klass="explored"
                count = tile.adjacentBombCount();
                text = (count > 0 ? `${count} ` : "");
            }
        } else if (tile.flagged) {
            klass = "flagged";
            text = "\u2691"
        } else {
            klass = "unexplored";
        }
        klass = `tile ${klass}`;

        return (
            <div className={klass} onClick={this.handleClick}>
                {text}
            </div>
        )
    }
}

export default Tile;