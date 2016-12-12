import React from 'react';

// Importing modules
import Header from './Header/';
import TestingContainer from './Testing/';

// Importing styles
import css from '../../styles/app.scss';

class Main extends React.Component {
  render () {
    return (
      <div className="page-wrapper">
        <aside className="nav-left"></aside>
        <Header {...this.props} />
        <main className="main-content">
          <TestingContainer {...this.props} />
        </main>
      </div>
    )
  }
}

export default Main;
