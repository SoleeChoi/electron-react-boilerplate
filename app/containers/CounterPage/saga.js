import { takeLatest } from 'redux-saga/effects';
// import { call, put } from 'redux-saga/effects';
// import axios from 'axios';
// import * as types from './constants';
// import * as actions from './actons';

const exampleType = 'app/Counter/EXAMPLE_TYPE';

function* exampleFunction() {
  // try {
  //   const request = axios({
  //     url: 'https://www.example.com/request',
  //     method: 'get',
  //     headers: {
  //      'Content-Type': 'application/json'
  //     },
  //   });
  //   const { data } = yield put(() => request);
  //   yield put(actions.requestSuccess(data))
  // } catch(error) {
  //   yield put(actions.requestFailure(error));
  // }
}

export default function* counterSaga() {
  yield takeLatest(exampleType, exampleFunction);
}
