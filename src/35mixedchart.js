import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';
import StudentSidebar from './24dataAnalystSidebar';
//import Chart from '../public/index.html'

import {Mixed} from 'react-chartjs-2';

// Bar chart
 const options = {
      title: {
        display: true,
        text: 'Population growth (millions): Europe & Africa'
      },
      legend: { display: false }

  };


const Data = {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [{
          label: "Europe",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "Africa",
          type: "line",
          borderColor: "#3e95cd",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "Europe",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, {
          label: "Africa",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
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
         <Mixed data={Data} options={options} width="700" height="500"/>
          </div>

        </div>
      </div>
    </div>

  );
}

export default ZubaerLineGraph;