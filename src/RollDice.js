import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die.js';

class RollDice extends Component {

    // default values of 6-sided die.
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = {
            // initial value of state.
            die1: 'one',
            die2: 'one',
            rolling: false
        }
        // setting context of rollDie function by binding 'this'.
        this.roll = this.roll.bind(this);
    }

    // callback function for onClick event, with setState().
    roll() {
        // pick 2 new rolls
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

        // set state with new rolls
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });

        // wait 1 second, then set rolling to false.
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }

    render() {
        return (
            <div>
                <div className="RollDice">
                    <div className="RollDice-container">
                        <Die face={this.state.die1} rolling={this.state.rolling} />
                        <Die face={this.state.die2} rolling={this.state.rolling} />
                    </div>
                    <button onClick={this.roll} disabled={this.state.rolling}>
                        {this.state.rolling === true ? "Rolling..." : "Roll Die!"}
                    </button>
                </div>
            </div>
        )
    }
}

export default RollDice;