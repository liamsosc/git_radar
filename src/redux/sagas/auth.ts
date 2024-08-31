import { ActionTypes } from "../../types";
import { authActions } from "../actions";
import { AUTHORIZE_SESSION } from "../actions/constants";
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
    yield put(authActions.pendingAuth());
    const response = yield call(getAccessTokenAPI, action.data);
    yield put(authActions.responseAuth(response));
  } catch (error) {
    yield put(authActions.rejectAuth(error));
  }
}

export function* watchSagaAuth() {
  yield takeLatest(AUTHORIZE_SESSION, callSagaAuth);
}
