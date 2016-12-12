import React from 'react'

import Svg from './Svg';

import css from '../../styles/components/Nav.scss';

class Nav extends React.Component {
  render () {
    return (
      <nav className="nav">
        <ul className="nav__list nav__list-horizontal">
          <li className="nav__item">
            <a className="nav__link" href="#">
              <Svg use="#icon-notice" addClass="nav__svg-icon" />
              <span className="badge nav__badge badge_danger">1</span>
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              <Svg use="#icon-like" addClass="nav__svg-icon" />
              <span className="badge nav__badge badge_success">2</span>
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              <Svg use="#icon-messages" addClass="nav__svg-icon" />
              <span className="badge nav__badge nav__badge_messages badge_danger">12</span>
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link user-pic" href="#">
              <img className="user-pic__image" src="img/user-pic.jpg" alt="" />
              <Svg use="#icon-more-icon" addClass="user-pic__svg-icon" />
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
