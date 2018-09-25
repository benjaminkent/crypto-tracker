import React, { Component } from 'react';
import Coin from './Coin.js'

class MainTable extends Component {
    state = {}
    render() {
        return (
            <Coin
                coin="bitcoin"
                symbol="BTC"
                circulating="50"
                price="6400"
                volume="988766"
                marketCap="9898786"
                lastHour="0989878"
                lastTwentyFour="76756"
                lastSeven="76345646"
            />
        )
    }
}

export default MainTable;


