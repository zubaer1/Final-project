import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';
import NavBanner from './21navbarBanner'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




class FirstPage extends Component {
  render() {
    return (
<div className="student">
          <NavBanner />

<div className="container">
      <div className="row" id="firstpageButton">
            <div className="col-md-9" >
                <div className="row">
                         <div className="col-md-4" id="basic">
                            <h4>Quick search App Basic:</h4>  
                            <Link to='/user'><button type="button" class="btn">User-Student</button></Link>
                         </div>
                         <div className="col-md-8" >
                         </div>
                </div>
            <hr/>

                      <div className="row">
                            <div className="col-md-4" >
                            </div>
                               <div className="col-md-8" id="developer">
                                  <h4>Quick search App Enterprise:</h4>  
                                  <Link to='/stakeHolder'><button type="button" class="btn">StakeHolder</button></Link>
                                  <Link to='/dataAnalyst'><button type="button" class="btn">DataAnalyst</button></Link>
                                  <Link to='/developer'><button type="button" class="btn">Developer</button></Link>
                               </div>
                      </div>
            </div>


            <div className="col-md-3" id="police"> 
              
                  <br/><br/><br/>
                <h4>Quick search App PRO:</h4>    
                <Link to='/stakeHolder'><button type="button" class="btn">Police/Sherif</button></Link>
                <Link to='/dataAnalyst'><button type="button" class="btn">Fire Fighter</button></Link>
                <Link to='/developer'><button type="button" class="btn">Car Ins Company</button></Link>
            </div>
      </div>    
  
</div>
</div>
    );
  }
}

export default FirstPage;


