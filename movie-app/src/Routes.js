import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home.js'
import Login from './components/Login.js'
import About from './components/About.js'
import Register from './components/Register.js'
import MoviesDetails from './components/MoviesDetails.js'
import './App.css'

class Routes extends Component {
  constructor(props){
    super(props);
    this.state = {
      payload: localStorage.getItem('movieid')
    }
     console.log('payload',this.state.payload)
  }

  disableLink = (e) => {
    alert('Please Login First..')
    e.preventDefault();
  }

  render() {
    return <Router>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <Link activeclassname="active" to={'/'}>Login</Link>
          </li>
          <li>
            <Link activeclassname="active" to={'/Register'}>Sign up</Link>
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
          <Route exact path='/MoviesDetails' component={MoviesDetails}/>
        </Switch>
      </div>
    </Router>
  }
}

export default Routes;
