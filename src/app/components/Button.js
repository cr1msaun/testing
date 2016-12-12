import React from 'react'

class Button extends React.Component {
  render () {
    return (
      <button className="btn answer-btn__btn">
        {this.props.children}
      </button>
    )
  }
}

export default Button;
