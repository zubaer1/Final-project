import React, { Component } from 'react';
//import logo from './logo.svg';
//import logo from "./image/zubaer.png";
import './App.css';
//import SosialMedia from './26socialMediaLink';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class NavbarBanner extends Component {
  render() {
    return (    
      <nav className="navbar navbar-inverse" id="bannerTop">

  <div classNmae="container-fluid">


    <div className="navbar-header navbar-right" id="banner2" >

        <Link to='/student'><button type="button" class="btn">Signup</button></Link>
        <Link to='/'><button type="button" class="btn">Login</button></Link>
    </div>




  </div>
</nav>
    );
  }
}


export default NavbarBanner;