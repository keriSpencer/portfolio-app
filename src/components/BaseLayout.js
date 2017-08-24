import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/portfolio-app/src/styles/App.css'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import References from './References'
import { Link } from 'react-router-dom'

class BaseLayout extends Component {
  render() {
    let footer = {
      textAlign: 'center',
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      marginTop: '133px',
      fontSize: '30px',
      marginBottom: 60
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
          <span>Name | Phone | Email</span>
        </footer>
      </div>
    )
  }
}

export default BaseLayout
