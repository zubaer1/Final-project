import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './22navbar';
import StudentSidebar from './24dataAnalystSidebar';
//import Chart from '../public/index.html'

import {Radar} from 'react-chartjs-2';

// Bar chart
 const options = {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
  };


const Data = {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
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
         <Radar data={Data} options={options} width="700" height="500"/>
          </div>

        </div>
      </div>
    </div>

  );
}

export default ZubaerLineGraph;