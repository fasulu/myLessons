// Code exemple Teams


// src/App.js

import React from 'react'
import Team from './components/Team/Team.js'
import LittleTitle from './components/LittleTitle/LittleTitle.js'

class App extends React.Component {

  listTeams = [
    { name: "Arsenal", color: "red", points: 10 },
    { name: "Manchester United", color: "red", points: 6 },
    { name: "Manchester City", color: "blue", points: 5 },
    { name: "Tottenham", color: "white", points: 7 }
  ]

  render() {

    return (
      <div>

        <h1>Liste d'equipes de foot d'angleterre</h1>

        {/* <Team name={this.listTeams[0].name} />

        <Team name={this.listTeams[1].name} />

        <Team name={this.listTeams[2].name} />

        <Team name={this.listTeams[3].name} /> */}

        {/* {
          this.listTeams.map(
            (team) => {
              return <Team name={team.name} />
            }
          )
        } */}

        {this.listTeams.map((team) => {
          return <Team name={team.name} color={team.color} amountPoints={team.points} />
        })}

        {/* {this.listTeams.map((team) => <Team name={team.name} />)} */}

        <LittleTitle textToShow="Fin de la liste"/>
      </div>
    )

  }

}

export default App

//**********************************

// src/components/Team/Team.js

import React from 'react'
import LittleTitle from '../LittleTitle/LittleTitle.js'

class Team extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            points: this.props.amountPoints,
            numberOfMatches: 4
        }
    }

    render() {

        // console.log(this.props);

        return (
            <div>
                <h2 style={
                    {
                        color: this.props.color,
                        fontSize: 25,
                        backgroundColor: "black"
                    }
                } >Team is: {this.props.name} and its color is: {this.props.color} </h2>

                {/* <h4>Amount of points is: {this.state.points}</h4> */}
                <LittleTitle textToShow={`Amount of points is: ${this.state.points}`}/>

                <h4>Number of matches: {this.state.numberOfMatches}</h4>

                {/* $('#btnAddOne').click(callback)  */}
                <button onClick={function () {
                    // console.log("Je viens d'être cliqué, je suis l'equipe: ", this.props.name);
                    
                    // this.props.amountPoints = this.props.amountPoints + 1 NOOOOOO
                    // this.state.points++ NOOOOOOOOOOOOOOOOOOOOOOOO

                    // console.log("Francisco", this.state.testFrancisco);

                    this.setState({
                        points: this.state.points + 1,
                        // numberOfMatches: this.state.numberOfMatches + 1 //On pourrait change un autre state aussi
                    })

                }} >Add 1 point</button>
            </div>
        )
    }
}

export default Team

//*****************************

// src/components/LittleTitle/LittleTitle.js

import React from 'react'

class LittleTitle extends React.Component {

    render () {
        return (
            <h4>{this.props.textToShow}</h4>
        )
    }
}

export default LittleTitle