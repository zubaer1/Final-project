import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'






class Student extends Component {
  render() {
    return (
     <div className="student">
          <Navbar />

    <div className="container">
          <div className="row" id="firstpageButton">



         <div className="col-md-2" >
         <h5> Project name:</h5>                  
                <a className="nav-link" href="#"><button type="button" className="btn">Basic</button></a> 
                <a className="nav-link" href="#"><button type="button" className="btn">Basic</button></a>
                <a className="nav-link" href="#"><button type="button" className="btn">Stake</button></a> 
                <a className="nav-link" href="#"><button type="button" className="btn">Basic</button></a>  
                <a className="nav-link" href="#"><button type="button" className="btn">Student</button></a> 
                <a className="nav-link" href="#"><button type="button" className="btn">Stake</button></a> 
                <a className="nav-link" href="#"><button type="button" className="btn">Basic</button></a> 
                <a className="nav-link" href="#"><button type="button" className="btn">Student</button></a> 
                <a className="nav-link" href="#"><button type="button" className="btn">Basic</button></a>
                <a className="nav-link" href="#"><button type="button" className="btn">Basic</button></a> 
           </div>




          <div className="col-md-9" id="firstpageButton2">
            <div>
              <h2>User</h2>
               <h2>User</h2>
                <h2>User</h2>
            </div>
          </div>

          </div>
    </div>
</div>
    );
  }
}
export default Student;