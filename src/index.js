import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Keywordscraping from './views/keywordscraping'
import Google from './views/google'
import News from './views/news'
import NotFound from './views/not-found'
import Jobhunt from './views/jobhunt'
import Webadd from './views/webadd'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Keywordscraping} exact path="/keywordscraping" />
        <Route component={Google} exact path="/google" />
        <Route component={News} exact path="/news" />
        <Route component={Jobhunt} exact path="/jobhunt" />
        <Route component={Webadd} exact path="/webadd" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
