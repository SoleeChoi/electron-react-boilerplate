import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import saga from './saga';
import reducer from './reducer';
import * as actions from './actions';
import { makeSelectNumber } from './selectors';
import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';

import Counter from '../../components/Counter';

const mapStateToProps = createStructuredSelector({
  counter: makeSelectNumber()
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'counter', reducer });
const withSaga = injectSaga({ key: 'counter', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Counter);
