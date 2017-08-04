import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class sidebar extends Component {
  render() {
    return (
<div className="student">
 

    <div className="container">
          <div className="row" id="firstpageButton">

         <div className="col-md-2" id="one">
         <h5>Link:</h5> 

                <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
                 <Link to='/node'><button type="button" className="btn">Boot camp</button></Link>
                  <Link to='/washington'><button type="button" className="btn">Washington post</button></Link>
                   <Link to='/javascript'><button type="button" className="btn">Java Script</button></Link>
                    <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
                     <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
                      <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
                       <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
                        <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
                        <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
         
           </div>



         <div className="col-md-2" id="three">
         <h5>Custom preference:</h5>                   
               <Link to='/textEditor'><button type="button" className="btn">Text Editor</button></Link>
           
 
           </div>





          </div>
    </div>
</div>
    );
  }
}

export default sidebar;