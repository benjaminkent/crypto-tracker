import React, { Component } from 'react';

class Coin extends Component {
    state = {}
    render() {
        return (
            <table>

                <thead>
                    <tr>
                        <th colspan="9">CryptoCurrency Data</th>
                    </tr>
                    <tr className="general-data">
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Circulating Supply</td>
                        <td>Price</td>
                        <td>Volume last 24 hours</td>
                        <td>Market Cap</td>
                        <td>% change last hour</td>
                        <td>% change last 24 hours</td>
                        <td>% change last 7 days</td>
                    </tr>
                </thead>

                <tbody>
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

                </tbody>

            </table>
        );
    }
}

export default Coin;