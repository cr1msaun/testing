import axios from 'axios';

import { setTitle } from './app.js';

export function showAlert(text) {
  return {
    type: 'SHOW_ALERT',
    text
  }
}

export function clearAlert(text) {
  return {
    type: 'CLEAR_ALERT'
  }
}

export function getNextQuestion() {
  return (dispatch, getState) => {
    const state = getState().testing;
    const currentQuestionNumber = state.nextQuestionNumber;
    const question = state.questions[currentQuestionNumber];

    if (question) {
      dispatch(updateCurrentQuestion(question));
      dispatch(incrementCurrentQuestionNumber());
    } else {
      dispatch(finishTesting());
    }
  }
}

function updateCurrentQuestion(question) {
  return {
    type: 'UPDATE_CURRENT_QUESTION',
    question
  }
}

function incrementCurrentQuestionNumber() {
  return {
    type: 'INCREMENT_CURRENT_QUESTION_NUMBER'
  }
}

export function updateAnswers(questionId, valueId) {
  return {
    type: 'UPDATE_ANSWERS',
    questionId,
    valueId
  }
}

export function finishTesting() {
  return {
    type: 'FINISH_TESTING'
  }
}

export function pauseTesting() {
  return {
    type: 'PAUSE_TESTING'
  }
}

export function unpauseTesting() {
  return {
    type: 'UNPAUSE_TESTING'
  }
}


export function timeIsUp() {
  return {
    type: 'TIME_IS_UP'
  }
}

export function getTestingData() {
  return dispatch => {
    axios.get('../data.json')
      .then(res => {
        const data = res.data;

        dispatch(getTestingInfoAsync(data));
        dispatch(setTitle(data.title, data.titleIcon));
      });
  }
}

function getTestingInfoAsync(data) {
  return {
    type: 'GET_TESTING_DATA',
    data
  }
}
