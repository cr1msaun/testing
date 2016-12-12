import React, { PropTypes } from 'react'

class HeaderNavMobile extends React.Component {
  render () {
    return (
      <div className="header__nav mobile-nav visible-mobile">
        <a className="mobile-nav-toggle">
          <span className="mobile-nav-toggle__line mobile-nav-toggle__line_first"></span>
          <span className="mobile-nav-toggle__line mobile-nav-toggle__line_second"></span>
          <span className="mobile-nav-toggle__line mobile-nav-toggle__line_third"></span>
        </a>
      </div>
    )
  }
}

export default HeaderNavMobile;
