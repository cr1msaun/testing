import React, { PropTypes } from 'react'
import hljs from 'highlight.js';

import AnswerItem from './AnswerItem';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.highlightAnswers = this.highlightAnswers.bind(this);
  }

  componentDidMount() {
    this.highlightAnswers();
  }

  componentDidUpdate(prevProps, prevState) {
    this.highlightAnswers();
  }

  highlightAnswers() {
    const answerItems = document.querySelectorAll('pre code');
    for (let answer of answerItems) {
      hljs.highlightBlock(answer);
    }
  }

  render () {
    const question = this.props.question;

    return (
      <ul className="answers">
        {question.answers.map(answer => (
          <AnswerItem
            key={"a" + answer.id}
            answer={answer}
            questionId={question.id}
            isPaused={this.props.isPaused}
            language={this.props.language}
            selectAnswer={this.props.selectAnswer}
            answerQuestion={this.props.answerQuestion}
          />)
        )}
      </ul>
    )
  }
}

Answers.propTypes = {
  question: PropTypes.object.isRequired,
  enableAnswerBtn: React.PropTypes.func
};

export default Answers;
