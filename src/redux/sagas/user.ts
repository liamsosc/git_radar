import { ActionTypes } from "../../types";
import { SEARCH_USER } from "../actions";
import { pendingUser, rejectUser, responseUser } from "../actions/users";
import {
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { getUserInfoAPI } from "../api/github";

type SagaGenerator = Generator<CallEffect<any> | PutEffect<any>, void, any>;

function* callSagaUser(action: ActionTypes): SagaGenerator {
  try {
    yield put(pendingUser());
    const response = yield call(getUserInfoAPI, action.data);
    yield put(responseUser(response));
  } catch (error) {
    yield put(rejectUser(error));
  }
}

export function* watchSagaUser() {
  yield takeLatest(SEARCH_USER, callSagaUser);
}
