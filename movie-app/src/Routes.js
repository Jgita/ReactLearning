import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './components/Home.js'
import Login from './components/Login.js'
import About from './components/About.js'

 class Routes extends Component {
  render() {
    return <Router>
            <div>  
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                   <li><Link to={'/About'}>About</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/About' component={About} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
            </div>
         </Router>
  }
}

export default Routes;

