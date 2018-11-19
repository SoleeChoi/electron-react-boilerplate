/**
 * CounterPage selectors
 */

import { createSelector } from 'reselect';

const selectCounterDomain = state => state.get('counter');

/**
 * Default selector used by Login
 */

const makeSelectCounter = () =>
  createSelector(
    selectCounterDomain,
    substate => substate.toJS()
  );

const makeSelectNumber = () =>
  createSelector(
    selectCounterDomain,
    basicState => basicState.get('number')
  );

export default makeSelectCounter;
export { makeSelectNumber };
