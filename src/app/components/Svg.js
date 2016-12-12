import React, { PropTypes } from 'react'
import css from '../../styles/components/Svg.scss';

class Svg extends React.Component {
  render () {
    return (
      <svg className={'svg-icon ' + this.props.addClass}>
        <use xlinkHref={this.props.use} />
      </svg>
    )
  }
}

Svg.propTypes = {
  addClass: PropTypes.string,
};

Svg.defaultProps = {
  addClass: '',
};

export default Svg;
