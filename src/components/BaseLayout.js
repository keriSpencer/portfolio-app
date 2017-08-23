import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/portfolio-app/src/styles/App.css'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'

class BaseLayout extends Component {
  render() {
    let footer = {
      textAlign: 'center',
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      marginTop: '133px',
      fontSize: '30px'
    }

    let navBar = {
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      listStyle: 'none',
      fontSize: '20px'
    }

    return (
      <div className="wrap">
        <div className="nav-bar-header">
          <nav>
            <ul className="navBar" style={navBar}>
              <li className="navListItem">
                Home
                {/* <Link to="#">Home</Link> */}
              </li>
              <li className="navListItem">
                About
                {/* <Link to="#">About</Link> */}
              </li>
              <li className="navListItem">
                Portfolio
                {/* <Link to="#">Portfolio</Link> */}
              </li>
            </ul>
          </nav>
        </div>

        {this.props.children}
        <footer className="footer" style={footer}>
          <span>Name | Phone | Email</span>
        </footer>
      </div>
    )
  }
}

export default BaseLayout
