import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '/Users/kerispencer/Development/react/portfolio-app/src/styles/App.css'

class Contact extends Component {
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
      fontSize: 27,
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 10
    }

    let pStyles = {
      fontSize: 20,
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      textAlign: 'center',
      marginTop: 0,
      marginLeft: 100,
      marginRight: 100
    }

    let a = {
      color: 'black'
    }

    return (
      <div>
        <h2 className="h2Styles" style={h2Styles}>
          Contact Me
        </h2>
        <div className="contactWrap">
          <div className="upperWrap">
            <h4 style={h4Styles}>Email</h4>
            <p style={pStyles}>kerigspencer @ gmail.com</p>
            <h4 style={h4Styles}>Phone</h4>
            <p style={pStyles}>405 625 7150</p>
          </div>
          <div className="lowerWrap">
            <h4 style={h4Styles}>Twitter</h4>
            <p style={pStyles}>
              <a href="https://twitter.com/keriSpencer_" style={a}>
                @ keriSpencer_
              </a>
            </p>
            <h4 style={h4Styles}>GitHub</h4>
            <p style={pStyles}>
              <a href="https://github.com/kerispencer" style={a}>
                github.com/keriSpencer
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
