import React, { Component } from 'react'
import CalcPic from '../images/withdrawalCalc.png'
import Explorius from '../images/exploriusHome.png'
import redditRandom from '../images/redditRandomizer.png'
import { Link } from 'react-router-dom'

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let h2Styles = {
      fontSize: 100,
      fontFamily: 'Baloo Bhaijaan',
      textAlign: 'center',
      marginBottom: 0,
      marginTop: 0
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
        <h4 id="h4samples" className="h4Styles" style={h4Styles}>
          Samples of my Work
        </h4>
        <ul className="catPics">
          <li style={li}>
            <Link to="/calculator">
              <img src={CalcPic} height="200px" width="auto" />
            </Link>
            <h3 style={h3Styles}>
              <Link to="/calculator">Withdrawal Calculator</Link>
            </h3>
          </li>
          <li style={li}>
            <Link to="/explorius">
              <img src={Explorius} height="200px" width="auto" />
            </Link>
            <h3 style={h3Styles}>
              <Link to="/explorius">Explorius</Link>
            </h3>
          </li>
          <li style={li}>
            <Link to="/newsfeed">
              <img src={redditRandom} height="200px" width="auto" />
            </Link>
            <h3 style={h3Styles}>
              <Link to="/newsfeed">News Feed Randomizer</Link>
            </h3>
          </li>
        </ul>
      </div>
    )
  }
}

export default Portfolio
