import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/portfolio-app/src/styles/App.css'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import References from './References'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

class BaseLayout extends Component {
  render() {
    let footer = {
      textAlign: 'center',
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      marginTop: '133px',
      fontSize: '20px',
      background: '#f2f3f4',
      height: '2em',
      paddingTop: '1em',
      color: '#666'
    }

    return (
      <div className="wrap">
        <div className="nav-bar-header">
          <nav>
            <ul className="navBar" />
          </nav>
        </div>

        {this.props.children}
        <footer className="footer" style={footer}>
          <span>
            405 625 7150 | kerigspencer @ gmail.com | {' '}
            <a href="https://twitter.com/keriSpencer_">
              <FontAwesome className="fa-twitter" name="fa-twitter" /> keriSpencer_
            </a>
          </span>
        </footer>
      </div>
    )
  }
}

export default BaseLayout
