
/****************App.js **********************/

import React from "react";
import './styles/global.css'
import Box from "./components/Box.js"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart: {heartMin}</p>
          <p>Temperature: {tempMin}</p>
          <p>Steps: {stepsMin}</p>

          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          
          {/* Steps */}
          <Box icon="directions_walk" color="black" value={3000} unit="steps" />

          {/* Heart */}
          <Box icon="favorite" color="red" value={120} unit="bpm" />

          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" />
          
        </div>
      </div>
    );
  }
}

export default App;

/***************************Box.js **********************/

import React from 'react'

class Box extends React.Component {

    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
            </div>
        )
    }
}

export default Box;

/***********************global.css************************/

.box:nth-child(even) {
    background-color: #cccccc;
}

.box:nth-child(odd) {
    background-color: #aaaaaa;
}

.box {
    height: 190px;
    padding: 8px;
    text-align: center;
}