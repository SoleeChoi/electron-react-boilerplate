// @flow
import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  number: 0
});

export default function counter(state = initialState, action) {
  const { type } = action;
  const number = state.get('number');

  switch (type) {
    case types.INCREMENT_COUNTER:
      return state.set('number', number + 1);
    case types.DECREMENT_COUNTER:
      return state.set('number', number - 1);
    default:
      return state;
  }
}
