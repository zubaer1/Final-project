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
         <h3>Data Analyst:</h3>
         <h5>Link:</h5> 

        <Link to='/dataOne'><button type="button" className="btn">LineChart</button></Link>
         <Link to='/databar'><button type="button" className="btn">Bar Chart</button></Link>
         <Link to='/datapie'><button type="button" className="btn">Pie Chart</button></Link>
          <Link to='/radarchart'><button type="button" className="btn">Radar Chart</button></Link>
          
           <Link to='/bubblechart'><button type="button" className="btn">Bubble chart</button></Link>
            
              <Link to='/doughnut'><button type="button" className="btn">Doughnut</button></Link>
               <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
                <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
                <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
                <Link to='/mixedchart'><button type="button" className="btn">Mixed chart</button></Link>
         
           </div>


         <div className="col-md-2" id="one">
         <h5>Custom preference:</h5> 
         <input type="text" class="myclass" />
         <Link to='/ucf'><button type="button" className="btn">Submit</button></Link>
         <hr/>
         <Link to='/textEditor'><button type="button" className="btn">Text Editor</button></Link>
        <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
         <Link to='/node'><button type="button" className="btn">Boot camp</button></Link>
          <Link to='/washington'><button type="button" className="btn">Washington post</button></Link>
           <Link to='/javascript'><button type="button" className="btn">Java Script</button></Link>
            <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
             <Link to='/ucf'><button type="button" className="btn">UCF</button></Link>
              
 
           </div>


          </div>
    </div>
</div>
    );
  }
}

export default sidebar;