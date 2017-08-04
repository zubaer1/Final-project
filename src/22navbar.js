import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from "./image/zubaer2.png";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class NavDefault extends Component {
  render() {
    return (    
      <nav className="navbar navbar-inverse" id="bannerTop1">

        <div classNmae="container-fluid">

     <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>

          <div className="navbar-header navbar-right" id="banner">
 
            <Link to='/'><button type="button" class="btn">Home</button></Link>
            <Link to='/user'><button type="button" class="btn">User-Student</button></Link>
            <Link to='/stakeHolder'><button type="button" class="btn">StakeHolder</button></Link>
            <Link to='/dataAnalyst'><button type="button" class="btn">DataAnalyst</button></Link>
            <Link to='/developer'><button type="button" class="btn">Developer</button></Link>
          </div>


        </div>
      </nav>
    );
  }
}


export default NavDefault;