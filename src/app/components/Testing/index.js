import React from 'react'

import Testing from './Testing';

class TestingContainer extends React.Component {
  componentDidMount() {
    this.props.getTestingData();
  }

  render () {
    const testing = this.props.testing;

    if (!testing) return null;

    return (
      <Testing {...this.props} />
    )
  }
}

export default TestingContainer;
