import React, { PropTypes } from 'react'

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange(e) {
    // Cancel selecting if testing is paused
    if (this.props.isPaused) {
      e.preventDefault();
      return;
    }

    this.props.selectAnswer(this.props.questionId, this.props.answer.id);
  }

  onKeyPress(e) {
    // if Enter was pressed, answering this question
    console.log('1');
    if (e.key === 'Enter') {
      this.props.answerQuestion(e);
    }
  }

  render () {
    const answer = this.props.answer;

    return (
      <li className="answers__item">
        <input className="answers__radio"
          type="radio"
          name={"question" + this.props.questionId}
          id={"a" + answer.id}
          onChange={this.onChange}
          onKeyDown={this.onKeyPress}
        />
        <label className="answers__label" htmlFor={"a" + answer.id}>
          <pre><code className={this.props.language}>{answer.text}</code></pre>
        </label>
        <div className="answers__switch"></div>
        <div className="answers__bg"></div>
      </li>
    )
  }
}

AnswerItem.propTypes = {
  answer: PropTypes.object.isRequired
};

export default AnswerItem;
