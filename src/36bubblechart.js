import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';
import StudentSidebar from './24dataAnalystSidebar';
//import Chart from '../public/index.html'

import {Bubble} from 'react-chartjs-2';

// Bar chart
 const options = {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Happiness"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "GDP (PPP)"
          }
        }]
      }
    };
 


const Data = {
labels: "Africa",
      datasets: [
        {
          label: ["China"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 21269017,
            y: 5.245,
            r: 15
          }]
        }, {
          label: ["Denmark"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 258702,
            y: 7.526,
            r: 10
          }]
        }, {
          label: ["Germany"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 6.994,
            r: 15
          }]
        }, {
          label: ["Japan"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4931877,
            y: 5.921,
            r: 15
          }]
        }
      ]
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
         <Bubble data={Data} options={options} width="700" height="500"/>
          </div>

        </div>
      </div>
    </div>

  );
}

export default ZubaerLineGraph;