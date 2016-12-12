export default function(state = null, action) {
  switch (action.type) {
    case 'GET_TESTING_DATA':
      return {
        ...action.data,
        nextQuestionNumber: 0,
        answers: {},
        isFinished: false,
        timeIsUp: false,
        isPaused: false
      }

    case 'UPDATE_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: action.question
      }

    case 'INCREMENT_CURRENT_QUESTION_NUMBER':
      return {
        ...state,
        nextQuestionNumber: state.nextQuestionNumber + 1
      }

    case 'UPDATE_ANSWERS':
      let answers = {
        ...state.answers,
        [action.questionId]: action.valueId
      }
      return { ...state, answers }

    case 'FINISH_TESTING':
      return {
        ...state,
        isFinished: true
      }

    case 'PAUSE_TESTING':
      return {
        ...state,
        isPaused: true
      }

    case 'UNPAUSE_TESTING':
      return {
        ...state,
        isPaused: false
      }

    case 'TIME_IS_UP':
      return {
        ...state,
        timeIsUp: true
      }

    case 'SHOW_ALERT':
      return {
        ...state,
        alert: action.text
      }

    case 'CLEAR_ALERT':
      return {
        ...state,
        alert: null
      }

    default:
      return state;
  }
}
