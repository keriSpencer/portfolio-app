import React, { Component } from 'react'

class Home extends Component {
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

    return (
      <div>
        <h2 className="h2Styles" style={h2Styles}>
          Web Developer
        </h2>
        <h4 className="h4Styles" style={h4Styles}>
          Keri Spencer
        </h4>
      </div>
    )
  }
}

export default Home
