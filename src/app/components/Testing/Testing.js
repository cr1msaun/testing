import React from 'react'

import Svg from '../Svg';
import Countdown from '../Countdown';
import Progress from '../Progress'

import Answers from './Answers';
import Alert from './Alert';

import css from '../../../styles/components/Testing.scss';

class Testing extends React.Component {
  constructor(props) {
    super(props);

    this.showFooter = this.showFooter.bind(this);
    this.showContent = this.showContent.bind(this);
    this.unpauseTest = this.unpauseTest.bind(this);
    this.showQuestion = this.showQuestion.bind(this);
    this.showTimeIsUp = this.showTimeIsUp.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
    this.enableAnswerBtn = this.enableAnswerBtn.bind(this);
    this.disableAnswerBtn = this.disableAnswerBtn.bind(this);
  }

  componentDidMount() {
    // Get first question
    this.props.getNextQuestion();

    // Disable the 'Answer' button
    this.disableAnswerBtn();

    // Show starting alert
    this.props.showAlert('Тестирование началось');

    // Set localStorage key
    if (isLocalStorageOn()) {
      localStorage.setItem('testing' + this.props.testing.id, '');
    }
  }

  componentWillReceiveProps(nextProps) {
    // Copying answers to the localStorage if it's available
    if (isLocalStorageOn()) {
      const testing = nextProps.testing;
      localStorage.setItem('testing' + testing.id, JSON.stringify(testing.answers));
    }
  }

  selectAnswer(questionId, valueId) {
    // update answers array in the state after selecting the answer from the list
    this.props.updateAnswers(questionId, valueId);

    // Enable the 'Answer' button
    this.enableAnswerBtn();
  }

  answerQuestion(e) {
    // Disable native behaviour
    e.preventDefault();

    // Get next question or finish the test
    this.props.getNextQuestion();

    // Disable the 'Answer' button
    this.disableAnswerBtn();
  }

  unpauseTest() {
    this.props.unpauseTesting();
  }

  enableAnswerBtn() {
    this.answerBtn.disabled = false;
  }

  disableAnswerBtn() {
    this.answerBtn.disabled = true;
  }

  showQuestion(question) {
    const { testing } = this.props;

    return ( question &&
      <div className="question">
        <section className="question__content">
          <div className="question__topic visible-desktop">Тема: {question.topic}</div>
          <a className="question__bugreport visible-desktop" href="#">Сообщить об ошибке</a>

          <h2 className="question__title container-mobile">{question.title}</h2>
          <Answers
            question={question}
            language={testing.language}
            isPaused={testing.isPaused}
            selectAnswer={this.selectAnswer}
            answerQuestion={this.answerQuestion}
          >
          </Answers>
        </section>
      </div>
    )
  }

  showResults() {
    return (
      <div className="container-mobile">
        <h2>Спасибо, тестирование завершено.</h2>
      </div>
    )
  }

  showTimeIsUp() {
    return (
      <div className="container-mobile">
        <h2>К сожалению, время вышло :(</h2>
      </div>
    )
  }

  showContent() {
    const { testing } = this.props;
    const question = testing.currentQuestion;

    if (testing.isFinished)
        return this.showResults();

    if (testing.timeIsUp)
      return this.showTimeIsUp();

    return this.showQuestion(question);
  }

  showFooter() {
    const { testing } = this.props;
    const currentQuestionNumber = testing.nextQuestionNumber;
    const questionsCount = testing.questions.length;

    if (!testing.isFinished && !testing.timeIsUp) {
      return (
        <div>
          {testing.alert ? <Alert message={testing.alert} clearAlert={this.props.clearAlert} /> : null}

          <div className="testing-footer__content container container-mobile">
            <Countdown timer={testing.timer} {...this.props} />

            {!testing.isPaused
            ? (
              <div className="testing-footer__right">
                <Progress current={currentQuestionNumber} total={questionsCount} addClass="progress_footer visible-desktop" />
                <div className="answer-btn">
                  <form onSubmit={this.answerQuestion}>
                    <button className="btn answer-btn__btn" ref={(ref) => this.answerBtn = ref}>
                      <span>Ответить </span>
                      <Svg use="#icon-arrow" addClass="answer-btn__svg-icon visible-desktop" />
                    </button>
                  </form>
                </div>
              </div>
          ) : (
            <div className="testing-footer__unpause answer-btn">
              <button className="btn answer-btn__btn" onClick={this.unpauseTest}>
                <span>Продолжить тест</span>
              </button>
            </div>
          )}
          </div>
        </div>
      )
    }
  }

  render () {
    return (
      <div className="testing" onKeyPress={this.onKeyPress}>
        <div className="testing-content container">
          {this.showContent()}
        </div>
        <div className="testing-footer">
          {this.showFooter()}
        </div>
      </div>
    )
  }
}

// Checking for localStorage availability
function isLocalStorageOn() {
  var test = 'mod';
  try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
  } catch(e) {
      return false;
  }
}

export default Testing;
