import React, { PropTypes } from 'react'

import Svg from './Svg';

import css from '../../styles/components/Countdown.scss';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: this.props.timer
    };

    this.tick = this.tick.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.startTicking = this.startTicking.bind(this);
  }

  componentDidMount() {
    this.startTicking();
  }

  componentWillReceiveProps(nextProps) {
    // Unpause test
    if (this.props.testing.isPaused === true && nextProps.testing.isPaused === false) {
      this.startTicking();
      this.countdownCntr.classList.remove('countdown_disabled');
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  startTicking() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    let timer = this.state.timer - 1;

    if (timer < 0) {
      clearInterval(this.timerId);
      this.props.timeIsUp();
      return;
    }

    this.setState({
      timer
    });
  }

  pauseTimer() {
    const { testing } = this.props;
    const { answers } = testing;

    const currentQuestionId = testing.currentQuestion.id;

    if (!answers[currentQuestionId]) {
      this.props.showAlert('Вы можете прервать тестирование после выбора ответа на текущий вопрос');
      return;
    }

    clearInterval(this.timerId);

    this.props.clearAlert();
    this.props.pauseTesting();
    this.countdownCntr.classList.add('countdown_disabled');
  }

  formatTime(time) {
    let minutes = parseInt( time / 60 );
    let seconds = parseInt( time % 60 );

    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return `${minutes}:${seconds}`;
  }

  render () {
    const { timer } = this.state;

    return (
      <div className="countdown" ref={ref => this.countdownCntr = ref}>
        <div className="countdown__timer">{this.formatTime(timer)}</div>
        <div className="countdown__pause" onClick={this.pauseTimer}>
          <Svg use="#icon-pause" addClass="countdown__svg-icon" />
        </div>
      </div>
    )
  }
}

Countdown.propTypes = {
  timer: PropTypes.number.isRequired
}

export default Countdown;
