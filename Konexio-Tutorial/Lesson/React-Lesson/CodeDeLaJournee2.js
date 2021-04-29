// Code de la journée

// App.js

import React from "react";
import Button from './components/Button.js'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      titleColor: "grey",
      sizeFont: 45
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.titleColor, fontSize: this.state.sizeFont }} >Change my color ! </h1>
        {/* <button onClick={() => this.setState({ titleColor: "Red" })} >Click me!</button> */}
        <Button myFunc={(newColor, newFontSize) => this.setState({ titleColor: newColor, sizeFont: newFontSize })} />
      </div>
    );
  }
}

export default App;

// components/Button.js

import React from 'react'

class Button extends React.Component {

    render () {
        return <button onClick={() => this.props.myFunc("red", 15)}>Click me!</button>
    }
} 

export default Button