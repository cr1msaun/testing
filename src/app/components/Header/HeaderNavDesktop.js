import React from 'react'
import Nav from '../Nav';

class HeaderNav extends React.Component {
  render () {
    return (
      <div className="header__nav visible-desktop">
        <Nav />
      </div>
    )
  }
}

export default HeaderNav;
