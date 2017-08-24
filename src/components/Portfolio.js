import React, { Component } from 'react'

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let h2Styles = {
      fontSize: 100,
      fontFamily: 'Baloo Bhaijaan',
      textAlign: 'center',
      marginBottom: 0
    }

    let h4Styles = {
      fontSize: 50,
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      textAlign: 'center',
      marginTop: 0
    }

    let h3Styles = {
      fontSize: 30,
      fontFamily: 'Raleway',
      fontWeight: 'light',
      textAlign: 'center',
      marginTop: 14
    }

    let li = {
      listStyle: 'none'
    }

    return (
      <div>
        <h2 className="h2Styles" style={h2Styles}>
          Portfolio of Kittens
        </h2>
        <h4 className="h4Styles" style={h4Styles}>
          Kittens Everywhere
        </h4>
        <ul className="catPics">
          <li style={li}>
            <img src="http://lorempixel.com/250/200/cats" />
            <h3 style={h3Styles}>FlapJack</h3>
          </li>
          <li style={li}>
            <img src="http://lorempixel.com/250/200/cats" />
            <h3 style={h3Styles}>PorkChop</h3>
          </li>
          <li style={li}>
            <img src="http://lorempixel.com/250/200/cats" />
            <h3 style={h3Styles}>BananaRama</h3>
          </li>
          <li style={li}>
            <img src="http://lorempixel.com/250/200/cats" />
            <h3 style={h3Styles}>PopTart</h3>
          </li>
        </ul>
      </div>
    )
  }
}

export default Portfolio
