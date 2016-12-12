import React, { PropTypes } from 'react'

import css from '../../../styles/components/PageTitle.scss';

class PageTitle extends React.Component {
  render () {
    const title = this.props.app.title;
    const titleIcon = this.props.app.titleIcon;

    return (
      <div className="page-title">
        {titleIcon &&
          <img className="page-title__icon" src={'img/' + titleIcon} alt="C#" />
        }
        <h1 className="page-title__text">{title}</h1>
      </div>
    )
  }
}

export default PageTitle;
