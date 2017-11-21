import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home.js'
import Login from './components/Login.js'
import About from './components/About.js'
import Register from './components/Register.js'
import './App.css'

class Routes extends Component {

  // constructor(props) {
  //   super(props);
  // }

  disableLink = (e) => {
    // alert('Please Login First..')
    // e.preventDefault();
    console.log('e', e.target.name)
  }

  render() {
    return <Router>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <Link activeclassname="active" to={'/'}>Login</Link>
          </li>
          <li>
            <Link activeclassname="active" to={'/Register'}>Register</Link>
          </li>
          <li>
            <Link
              name="Dashbord"
              onClick={this.disableLink}
              activeclassname="active"
              to={'/Home'}>Dashbord</Link>
          </li>
          <li>
            <Link
              name="About"
              activeclassname="active"
              to={'/About'}>About</Link>
          </li>

        </ul>
        <Switch>
          <Route exact path='/Home' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/' component={Login}/>
          <Route exact path='/Register' component={Register}/>
        </Switch>
      </div>
    </Router>
  }
}

export default Routes;
