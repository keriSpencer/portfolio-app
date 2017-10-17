import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ExploriusPic from '../images/exploriusHome.png'

class Explorius extends Component {
  render() {
    let h2Styles = {
      fontSize: 100,
      fontFamily: 'Baloo Bhaijaan',
      textAlign: 'center',
      marginBottom: '1em',
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
      color: '#666',
      lineHeight: '1.5em'
    }

    return (
      <div>
        <h2 className="h2Styles" style={h2Styles}>
          <Link className="link" to="#">
            Explorius
          </Link>
        </h2>
        <div className="catPics">
          <img src={ExploriusPic} height="300px" width="auto" />
        </div>
        <h4 className="h4Styles" style={h4Styles}>
          Details
        </h4>
        <p className="pStyles" style={pStyles}>
          We created an application for the Tampa Bay Hospitality Hackathon. Our submission assumes that someone has
          just booked a cruise. By logging into our site using Facebook, we could create custom excursion
          recommendations based on many data points being analyzed.
        </p>
        <p className="pStyles" style={pStyles}>
          Various technology such as{' '}
          <Link className="sourceLinks" to="https://cloud.google.com/vision/">
            Google's Cloud Vision Service
          </Link>{' '}
          to analyze the user's Facebook profile photo and{' '}
          <Link className="sourceLinks" to="https://www.ibm.com/watson/services/natural-language-classifier/">
            IBM’s Natural Language Classifier
          </Link>{' '}
          really make this application powerful.
        </p>
        <p className="pStyles" style={pStyles}>
          Our goal in entering this hackathon event was to create an amazing application and meeting great, like-minded
          individuals. We were honored and beyond thankful to win the grand prize and have the opportunity to present
          our idea to the entire Sourcetoad team. More details can be found{' '}
          <Link
            className="sourceLinks"
            to="https://www.sourcetoad.com/cruise/hack-hospitality-cruise-challenge-winners/"
          >
            here
          </Link>.
        </p>
      </div>
    )
  }
}

export default Explorius
