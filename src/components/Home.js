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
      marginTop: 0
    }

    let content = (
      <div>
        <h2 className="h2Styles" style={h2Styles}>
          Portfolio of Kittens
        </h2>
        <h4 className="h4Styles" style={h4Styles}>
          Kittens Everywhere
        </h4>
      </div>
    )

    return content
    // <div>
    //   <h2 className="h2Styles" style={h2Styles}>
    //     Portfolio of Kittens
    //   </h2>
    //   <h4 className="h4Styles" style={h4Styles}>
    //     Kittens Everywhere
    //   </h4>
    // </div>
  }
}

export default Home
