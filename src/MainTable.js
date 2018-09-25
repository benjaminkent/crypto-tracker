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
            <td className="coin-info">
                {coins}
            </td>
        )
    }
}

export default MainTable;


