import React, { Component } from 'react'

class Coin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      priceIncreasing: false,
      priceDecreasing: false
    }
  }

  componentWillReceiveProps = newProps => {
    if (newProps.price > this.props.price) {
      this.setState((state, props) => {
        return {
          priceIncreasing: true
        }
      })
    }
    if (newProps.price < this.props.price) {
      this.setState((state, props) => {
        return {
          priceDecreasing: true
        }
      })
    }
  }

  render() {
    let priceClass = 'normal'

    if (this.state.priceIncreasing) {
      priceClass = 'green'
    }

    if (this.state.priceDecreasing) {
      priceClass = 'red'
    }

    return (
      <tr className={priceClass}>
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

export default Coin
