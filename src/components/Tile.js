import React from 'react';
import { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (event) => {
        const flagged = e.value === "F" ? true : false;
        this.props.updateGame(this.props.tile, flagged);
    }
    
    render() {
        const tile = this.props.tile;
        let klass, text, count;
        if (tile.explored) {
            if (tile.bombed) {
                klass="bombed";
                text = "B"
            } else {
                klass="explored"
                count = tile.adjacentBombCount();
                text = (count > 0 ? `${count}` : "");
            }
        } else if (tile.flagged) {
            klass = "flagged";
            text = "F"
        } else {
            klass = "unexplored";
        }
        klass = `tile-${klass}`;

        return (
            <div className={klass} onClick={this.handleClick}>
                {text}
            </div>
        )
    }
}

export default Tile;