import React, { Component } from 'react';

class Coin extends Component {

    // constructor(props) {
    //     super(props)
    // 
    //     this.state = { price: 0 }
    // 
    //     componentDidUpdate(prevProps); {
    //         if (this.state.price > prevProps.price) {
    //             // add green class
    //             className += 'green'
    //         }
    // 
    //         if (this.state.price < prevProps.price) {
    //             // add red class
    //             className += 'red'
    //         }
    //     }
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.price > prevProps.price) {
    //         className += 'green'
    //     }
    //     if (this.props.price < prevProps.price) {
    //         className += 'red'
    //     }
    // }

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