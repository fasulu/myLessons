import React, { Component } from 'react'

class Button extends Component {
    render(props) {
        return (
            <button onClick={this.props.onClickFuction} className={this.props.isSelected} >
                {this.props.children}
            </button>
        )
    }
}
export default Button;