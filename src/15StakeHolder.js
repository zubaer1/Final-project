import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';
import StakeSidebar from './25stakeSidebar';

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

                <div className="col-md-5" id="one">
                    <StakeSidebar />
                </div>


                <div className="col-md-5" id="firstpageButton2"> 
                </div>

        </div>
    </div>
</div>
    );
  }
}

export default Student;