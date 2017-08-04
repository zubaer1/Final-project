import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class Stakesidebar extends Component {
  render() {
    return (
<div className="student">
 

    <div className="container">
          <div className="row" id="firstpageButton">

         <div className="col-md-2" id="one">
         <h3>Stake Holder:</h3>
         <h5>Link:</h5> 

        <Link to='/dataOne'><button type="button" className="btn">LineChart</button></Link>
 
         <Link to='/databar'><button type="button" className="btn">Line Chart</button></Link>

         <Link to='/datapie'><button type="button" className="btn">Pie Chart</button></Link>
          <Link to='/radarchart'><button type="button" className="btn">Radar Chart</button></Link>
          
           <Link to='/bubblechart'><button type="button" className="btn">Bubble chart</button></Link>
            
              <Link to='/doughnut'><button type="button" className="btn">Doughnut</button></Link>      
           </div>


         <div className="col-md-2" id="one">
         <h5>Custom preference:</h5> 
         <input type="text" class="myclass" />
         <Link to='/ucf'><button type="button" className="btn">Submit</button></Link>
         <hr/>
       <Link to='/databar'><button type="button" className="btn">Yesterday Roprt</button></Link>
        <Link to='/databar'><button type="button" className="btn">LastMonth Chart</button></Link>
         <Link to='/databar'><button type="button" className="btn">LastYear Chart</button></Link>
          <Link to='/washington'><button type="button" className="btn">Washington post</button></Link>
           <Link to='/javascript'><button type="button" className="btn">Java Script</button></Link>
  
              
 
           </div>


          </div>
    </div>
</div>
    );
  }
}

export default Stakesidebar;