import React, { Component } from 'react'

class About extends Component {
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
      textAlign: 'left',
      marginTop: 100,
      marginLeft: 100,
      marginBottom: 31,
      color: '#666'
    }

    let pStyles = {
      fontSize: 20,
      fontFamily: 'Raleway',
      fontWeight: 'extra-light',
      textAlign: 'justify',
      marginTop: 0,
      marginLeft: 100,
      marginRight: 100,
      color: '#666'
    }

    return (
      <div>
        <h2 className="h2Styles" style={h2Styles}>
          My Passions
        </h2>
        <h4 className="h4Styles" style={h4Styles}>
          Family
        </h4>
        <p className="pStyles" style={pStyles}>
          Spending time with family and friends is what life is all about. Enriching their lives while simultaneously
          enriching yours. I love to enjoy the people in my life and try new experiences with them.
        </p>
        <h4 className="h4Styles" style={h4Styles}>
          Education
        </h4>
        <p className="pStyles" style={pStyles}>
          Even though I am not in school, I never stop learning. From coding schools, to online courses, to local crash
          courses and conferences, I do whatever I can to make sure that I am always learning. Jim Rohn has taught us,
          'Never begrudge the money you spend on your own education.' I try to keep this in mind as I journey through
          life. If I'm ever in a slump, I know that I need to start spending more time on bettering myself and the value
          that I bring to society and my community.
        </p>
        <h4 className="h4Styles" style={h4Styles}>
          Travel
        </h4>
        <p className="pStyles" style={pStyles}>
          As I mentioned before, I love new experiences from new and local food, to roadtrips or traveling all over the
          world. My favorite things in life are things that I haven't tried or the places I haven't been. If I'm not
          near my friends or a computer, I hope to be in a new place to explore.
        </p>
      </div>
    )
  }
}

export default About
