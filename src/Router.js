import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Pages/Home.js'
import Contact from './Pages/Contact.js'
import About from './Pages/About.js'
class Router extends Component {
    render() {
      return (
        <div>
          <Switch>
            <Router   exact  path="/" component={<Home/>} />
            <Router   exact  path="/Contact" component={<Contact/>} />
            <Router   exact  path="/About" component={<About/>} />
          </Switch>
         </div>
      );
    }
  }
  
  export default Router