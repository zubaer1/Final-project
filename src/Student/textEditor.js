import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';
import StudentSidebar from './23studentSidebar';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class Ucf extends Component {
  render() {
    return (
<div className="student">
          <Navbar />

    <div className="container">
          <div className="row" id="firstpageButton">

         <div className="col-md-5" id="one">
              <StudentSidebar />
          </div>



      <div className="col-md-5" id="firstpageButton2">
           
            <textarea  id="texteditor" name="text" cols="25" rows="5">
            </textarea>
      </div>

          </div>
    </div>
</div>
    );
  }
}

export default Ucf;