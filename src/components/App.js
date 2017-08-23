import React, { Component } from 'react'
import '/Users/kerispencer/Development/react/portfolio-app/src/styles/App.css'

import BaseLayout from './BaseLayout'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: '',
      about: '',
      portfolio: []
    }
  }

  render() {
    return (
      <BaseLayout>
        <Home home={this.state.home} />
        {/* <About about={this.state.about} /> */}
        {/* <Portfolio /> */}
      </BaseLayout>
    )
  }
}

export default App
