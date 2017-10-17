import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NewsFeedPic from '../images/redditRandomizer.png'

class NewsFeed extends Component {
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
            News Feed Randomizer
          </Link>
        </h2>
        <div className="catPics">
          <img src={NewsFeedPic} height="300px" width="auto" />
        </div>
        <h4 className="h4Styles" style={h4Styles}>
          Details
        </h4>
        <p className="pStyles" style={pStyles}>
          This application allows a user to randomly see different news articles from Reddit.
        </p>
      </div>
    )
  }
}

export default NewsFeed
