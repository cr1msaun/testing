import React, { PropTypes } from 'react'
import css from '../../styles/components/Progress.scss';

class Progress extends React.Component {
  render () {
    return (
      <div className={"progress " + this.props.addClass}>
        <div className="progress__current">{this.props.current}</div>
        <div className="progress__separator">/</div>
        <div className="progress__total">{this.props.total}</div>
      </div>
    )
  }
}

export default Progress;
