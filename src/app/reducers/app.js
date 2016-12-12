export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title,
        titleIcon: action.icon
      };
    default:
      return state;
  }
}
