import React, { Component } from 'react';
import Coin from './Coin.js'
// import coinData from './coinData.json'


class MainTable extends Component {

    constructor(props) {
        super(props)

        this.state = { coins: [] }
    }

    componentDidMount() {
        setInterval(() => {
            fetch('https://api.coinmarketcap.com/v2/ticker/?limit=100')
                .then(response => {
                    return response.json()
                })
                .then(myJson => {
                    this.setState({ coins: myJson.data })
                })
        }, 1000)
    }

    render() {
        let coins = Object.keys(this.state.coins).map(id => {
            let coin = this.state.coins[id]
            return <Coin
                key={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                circulating={coin.circulating_supply}
                price={coin.quotes.USD.price}
                volume={coin.quotes.USD.volume_24h}
                marketCap={coin.quotes.USD.market_cap}
                lastHour={coin.quotes.USD.percent_change_1h}
                lastTwentyFour={coin.quotes.USD.percent_change_24h}
                lastSeven={coin.quotes.USD.percent_change_7d}
            />
        })

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

            </table >
        )
    }
}

export default MainTable;


