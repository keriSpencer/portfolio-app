import React, { Component } from 'react'
import CalcPic from '../images/withdrawalCalc.png'

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
      marginTop: 0,
      color: '#666'
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
          Portfolio
        </h2>
        <h4 className="h4Styles" style={h4Styles}>
          Samples of my work
        </h4>
        <ul className="catPics">
          <li style={li}>
            <img src={CalcPic} height="200px" width="auto" />
            <h3 style={h3Styles}>Withdrawal Calculator</h3>
          </li>
          <li style={li}>
            <h3 style={h3Styles}>Explori.us | Team Project</h3>
          </li>
          <li style={li}>
            <h3 style={h3Styles}>Calculator</h3>
          </li>
        </ul>
      </div>
    )
  }
}

export default Portfolio
