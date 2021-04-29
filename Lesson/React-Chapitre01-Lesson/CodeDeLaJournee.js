// Code de la journée

// App.js

import React from "react";
import Child from "./Child.js"
import './App.css'


class App extends React.Component {

    salut = "Salut tout le monde"

    render() {

        return (
            <div id="App">
                <h1>Karim: </h1>
                <h2 className="red-color">Fasulu:</h2>
                
                <Child studentName="Sabrina"  />
                
                <Child studentName="Asma" phrase="Je suis la meilleure" />
                
                <Child studentName="Moncef" age={19} />
                
                <Child studentName="Bakagnan" phrase="Vive la Juventus!!!" age={22} />

                {/* Ceci marcherait aussi */}
                {/* <Child></Child> */}
            </div>
        );

    }

}

export default App;

/****************************** */

// Child.js

import React from 'react';

class Child extends React.Component {

    constructor() {
        super()
    }

    render() {

        return (
            <div id="Child">
                {/* <h3>I'm the child</h3> */}
                
                <h4>My props studentName is: {this.props.studentName}</h4>

                <h4>My phrase is {this.props.phrase}</h4>

                <h4>I'm {this.props.age} years old</h4>
            </div>            
        );

    }

}

export default Child

