import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as testingActions from '../actions/testing';
import * as appActions from '../actions/app';

import Main from './Main';

// connects root reducer to props
function mapStateToProps(state) {
  return {
    testing: state.testing,
    app: state.app
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({...testingActions, ...appActions}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
