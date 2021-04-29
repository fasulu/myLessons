/****************App.js ********************/

import React from "react";
import Box from "./components/Box.jsx";
import './styles/global.css';

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            water: 1.5,
            heart: 120,
            temperature: -10,
            steps: 3000
        }

        this.onHeartChange = this.onHeartChange.bind(this)
        this.onStepsChange = this.onStepsChange.bind(this)
        this.onTemperatureChange = this.onTemperatureChange.bind(this)
    }

    calculateWater() {
        let water = 1.5

        const {
            temperature,
            heart,
            steps 
        } = this.state

        if (temperature > 20) {
            // 20 > 20 => 0
            // 21 > 20 => 1 => 0,02
            // 22 > 20 => 2 => 0,04
            // ...
            // 25 > 20 => 5 => 0,10

            const gradesGreater = temperature - 20
            const litersTemp = gradesGreater * 0.02

            water += litersTemp
        } 
        
        if (heart > 120) {
            const beatGreater = heart - 120
            const litersHeart = beatGreater * 0.0008

            water += litersHeart
        } 
        
        if (steps > 10000) {
            const stepsGreater = steps - 10000
            const litersSteps = stepsGreater * 0.00002

            water += litersSteps
        }

        water = parseFloat(water.toFixed(2))
        // water = water.toFixed(2)

        this.setState({
            // water: water
            water
        })
    }

    onHeartChange(e) {
        this.setState({
            heart: e.target.value
        })

        this.calculateWater()
    }

    onStepsChange(e) {
        this.setState({
            steps: e.target.value
        })

        this.calculateWater()
    } 

    onTemperatureChange(e) {
        this.setState({
            temperature: e.target.value
        })

        this.calculateWater()
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* Water */}
                    <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />

                    {/* Steps */}
                    <Box
                        icon="directions_walk"
                        color="black"
                        value={this.state.steps}
                        unit="steps"
                        min={stepsMin}
                        max={stepsMax}
                        onChange={this.onStepsChange} />

                    {/* Heart */}
                    <Box
                        icon="favorite"
                        color="red"
                        value={this.state.heart}
                        unit="bpm"
                        min={heartMin}
                        max={heartMax}
                        onChange={this.onHeartChange} />

                    {/* Temperature */}
                    <Box
                        icon="wb_sunny"
                        color="yellow"
                        value={this.state.temperature}
                        unit="°C"
                        min={tempMin}
                        max={tempMax}
                        onChange={this.onTemperatureChange} />

                </div>
            </div>
        );
    }
}

export default App;


//***********Box.jsx***************

import React from 'react'

class Box extends React.Component {

    render() {

        // console.log("this.props", this.props);

        const { 
            icon,
            color,
            value,
            unit,
            min,
            max,
            onChange 
        } = this.props

        let inputRange = null

        if (unit !== "L") {
            inputRange = (
                <input type="range"
                    min={min}
                    max={max}
                    value={value}
                    onInput={onChange} />
            )
        }

        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ fontSize: 100, color: color }}>
                    {icon}
                </span>
                <p>{value} {unit}</p>
                {inputRange}
            </div>
        )
    }
}

export default Box

//*******************global.css*****************