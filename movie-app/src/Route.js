import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

 class Routes extends Component {
  render() {
    return <Router>
        <div>
            <div><Link to = "/netflix">Netflix</Link></div>
            <div><Link to = "/amazon">Amazon Prime Video</Link></div>
            <div><Link to = "/yahoo">Yahoo</Link></div>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>s
            <Route path="/:id" component={Child}/>
        </div>
    </Router>
  }
}

