import {
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";

import { ActionTypes } from "../../types";
import { SEARCH_USER } from "../actions/constants";
import { getUserInfoAPI } from "../api/github";
import { userActions } from "../actions";

type SagaGenerator = Generator<CallEffect<any> | PutEffect<any>, void, any>;

export function* callSagaUser(action: ActionTypes): SagaGenerator {
  try {
    yield put(userActions.pendingUser());
    const response = yield call(getUserInfoAPI, action.data);
    yield put(userActions.responseUser(response));
  } catch (error) {
    yield put(userActions.rejectUser(error));
  }
}

export function* watchSagaUser() {
  yield takeLatest(SEARCH_USER, callSagaUser);
}
