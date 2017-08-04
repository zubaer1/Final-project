import React, { Component } from 'react';
import logo from './logo.svg';

import Home from './12firstPage';
import User from './13student';
import DataAnalyst from './14DataAnalyst';
import StakeHolher from './15StakeHolder';
import Developer from './16Developer';
import Ucf from './ucf';
import Node2 from './node';
import javas from './javascript';
import Washington from './washington';
import TextEditor from './textEditor';
import DataOne from './31dataOne';
import Databar from './32databar';
import Datapie from './33datapie';

import Radar from './34radarchart';
import Mixed from './35mixedchart';
import Bubble from './36bubblechart';
import Doughnut from './37doughnut';



import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class App extends Component {
  render() {
    return (
  <Router>
    <div className="App">

    <Route exact path="/" render={ () => (
      <div><Home /></div>
       )}/>

     <Route path="/user" component={User}/>
     <Route path="/stakeHolder" component={StakeHolher}/>
     <Route path="/dataAnalyst" component={DataAnalyst}/>
     <Route path="/developer" component={Developer}/>
     <Route path="/ucf" component={Ucf}/>
     <Route path="/node" component={Node2}/>
     <Route path="/javascript" component={javas}/>
     <Route path="/washington" component={Washington}/>
     <Route path="/textEditor" component={TextEditor}/>
     <Route path="/dataone" component={DataOne}/>
     <Route path="/databar" component={Databar}/>
     <Route path="/datapie" component={Datapie}/>
     <Route path="/radarchart" component={Radar}/>
     <Route path="/mixedchart" component={Mixed}/>
     <Route path="/bubblechart" component={Bubble}/>
     <Route path="/doughnut" component={Doughnut}/>
  

    </div>
  </Router>
    );
  }
}

    
export default App;
