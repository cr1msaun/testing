import React from 'react'

import Progress from '../Progress';
import PageTitle from './PageTitle';
import HeaderNavDesktop from './HeaderNavDesktop';
import HeaderNavMobile from './HeaderNavMobile';

import css from '../../../styles/components/Header.scss';

class Header extends React.Component {
  render () {
    const testing = this.props.testing;

    if (!testing) return null;

    const currentQuestionNumber = testing.nextQuestionNumber;
    const questionsCount = testing.questions.length;

    return (
      <header className="header container">
        <div className="header__content container-mobile">
          <PageTitle {...this.props}></PageTitle>

          <Progress current={currentQuestionNumber} total={questionsCount} addClass="progress_header visible-mobile" />

          <HeaderNavDesktop />
          <HeaderNavMobile />
        </div>
      </header>
    )
  }
}

export default Header;
