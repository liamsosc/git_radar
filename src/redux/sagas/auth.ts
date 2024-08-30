import { ActionTypes } from "../../types";
import { AUTHORIZE_SESSION } from "../actions";
import { pendingAuth, rejectAuth, responseAuth } from "../actions/auth";
import { getAccessTokenAPI } from "../api/auth";
import {
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";

type SagaGenerator = Generator<CallEffect<any> | PutEffect<any>, void, any>;

function* callSagaAuth(action: ActionTypes): SagaGenerator {
  try {
    yield put(pendingAuth());
    const response = yield call(getAccessTokenAPI, action.data);
    yield put(responseAuth(response));
  } catch (error) {
    yield put(rejectAuth(error));
  }
}

export function* watchSagaAuth() {
  yield takeLatest(AUTHORIZE_SESSION, callSagaAuth);
}
