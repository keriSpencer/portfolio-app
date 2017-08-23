import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

/* <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>, */
