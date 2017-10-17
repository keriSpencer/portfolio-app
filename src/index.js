import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'

import Home from '/Users/kerispencer/Development/react/portfolio-app/src/components/Home.js'
import About from '/Users/kerispencer/Development/react/portfolio-app/src/components/About.js'
import Portfolio from '/Users/kerispencer/Development/react/portfolio-app/src/components/Portfolio.js'
import Contact from '/Users/kerispencer/Development/react/portfolio-app/src/components/Contact.js'
import References from '/Users/kerispencer/Development/react/portfolio-app/src/components/References.js'
import Calculator from '/Users/kerispencer/Development/react/portfolio-app/src/components/Calculator.js'
import Explorius from '/Users/kerispencer/Development/react/portfolio-app/src/components/Explorius.js'
import NewsFeed from '/Users/kerispencer/Development/react/portfolio-app/src/components/NewsFeed.js'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <div className="centerText">
        <nav className="navBar">
          <NavLink activeClassName="selected" className="navListItem" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="selected" className="navListItem" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="selected" className="navListItem" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink activeClassName="selected" className="navListItem" to="/contact">
            Contact
          </NavLink>
          {/* <NavLink activeClassName="selected" className="navListItem" to="/references">
            References
          </NavLink> */}
        </nav>
      </div>
      <Switch>
        <Route path="/newsfeed" component={NewsFeed} />
        <Route path="/explorius" component={Explorius} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/references" component={References} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
