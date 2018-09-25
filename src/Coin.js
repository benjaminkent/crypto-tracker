import React, { Component } from 'react';

class Coin extends Component {
    state = {}
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.symbol}</td>
                <td>{this.props.circulating}</td>
                <td>${this.props.price}</td>
                <td>{this.props.volume}</td>
                <td>${this.props.marketCap}</td>
                <td>{this.props.lastHour}%</td>
                <td>{this.props.lastTwentyFour}%</td>
                <td>{this.props.lastSeven}%</td>
            </tr>
        )
    }
}

export default Coin;