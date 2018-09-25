import React, { Component } from 'react';
import Coin from './Coin.js'

class MainTable extends Component {
    state = {}
    render() {

        const coinData = [
            {
                name: "bitcoin",
                symbol: "BTC",
                circulating: "50",
                price: "6400",
                volume: "988766",
                marketCap: "9898786",
                lastHour: "0989878",
                lastTwentyFour: "76756",
                lastSeven: "76345646"
            }
        ]

        const coins = coinData.map((coin) =>
            <Coin
                name={coin.name}
                symbol={coin.symbol}
                circulating={coin.circulating}
                price={coin.price}
                volume={coin.volume}
                marketCap={coin.marketCap}
                lastHour={coin.lastHour}
                lastTwentyFour={coin.lastTwentyFour}
                lastSeven={coin.lastSeven}
            />
        )

        return (
            <table>

                <thead>
                    <tr>
                        <th colSpan="9">CryptoCurrency Data</th>
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

                    {coins}

                </tbody>

            </table>
        )
    }
}

export default MainTable;


