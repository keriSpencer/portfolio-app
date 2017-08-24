import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
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

    // let li = {
    //   listStyle: 'none',
    //   fontSize: '27',
    //   fontFamily: 'Raleway',
    //   fontWeight: 'extra-light',
    //   textAlign: 'center',
    //   marginTop: 0,
    //   paddingTop: 31
    // }

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
      // textDecoration: 'none'
    }

    return (
      <div>
        <h2 className="h2Styles" style={h2Styles}>
          Contact Us
        </h2>
        <div className="flexOuter">
          <h4 style={h4Styles}>Email</h4>
          <p style={pStyles}>
            <a href="https://twitter.com/EmrgencyKittens" style={a}>
              info @ website.com
            </a>
          </p>
          <h4 style={h4Styles}>Phone</h4>
          <p style={pStyles}>555 555 5555</p>
          <h4 style={h4Styles}>Twitter</h4>
          <p style={pStyles}>
            <a href="https://twitter.com/EmrgencyKittens" style={a}>
              @EmrgencyKittens
            </a>
          </p>
          <h4 style={h4Styles}>GitHub</h4>
          <p style={pStyles}>
            <a href="https://twitter.com/EmrgencyKittens" style={a}>
              github.com/kittens
            </a>
          </p>
        </div>
        {/* <h4 style={h4Styles}>Email</h4>
        <p style={pStyles}>info @ website.com</p> */}

        {/* <h4 style={h4Styles}>Address</h4>
        <p style={pStyles}>555 E Main | Tampa, FL | 33602</p> */}
      </div>
    )
  }
}

export default Contact
