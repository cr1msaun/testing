import React from 'react'

class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.hideAlert = this.hideAlert.bind(this);
  }

  componentDidMount() {
    this.hideAlert();
  }

  hideAlert() {
    if (this.alertTimeout) clearTimeout(this.alertTimeout);

    this.alertTimeout = setTimeout(
      () => this.props.clearAlert(),
      6000
    )
  }

  render () {
    return <div className="testing-footer__alert container container-mobile">{this.props.message}</div>;
  }
}

export default Alert;
