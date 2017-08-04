import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';
import StudentSidebar from './24dataAnalystSidebar';
//import Chart from '../public/index.html'

import {Pie} from 'react-chartjs-2';

// Bar chart
 const options = {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
  };


const Data = {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    };


function ZubaerLineGraph(props) {
  return (

    <div className="student">
      <Navbar />

      <div className="container">
        <div className="row" id="firstpageButton">

          <div className="col-md-5" id="one">
            <StudentSidebar />
          </div>

          <div className="col-md-1" id="firstpageButton2">
          </div>



          <div className="col-md-5" id="firstpageButton2">
         <Pie data={Data} options={options} width="700" height="500"/>
          </div>

        </div>
      </div>
    </div>

  );
}

export default ZubaerLineGraph;