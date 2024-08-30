import { ActionTypes } from "../../types";
import { LIST_REPOSITORIES } from "../actions";
import {
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { getRepositoryAPI } from "../api/github";
import { pendingRepos, rejectRepos, responseRepos } from "../actions/repos";

type SagaGenerator = Generator<CallEffect<any> | PutEffect<any>, void, any>;

export function* callSagaRepository(action: ActionTypes): SagaGenerator {
  try {
    yield put(pendingRepos());
    const response = yield call(getRepositoryAPI, action.data);
    yield put(responseRepos(response));
  } catch (error) {
    yield put(rejectRepos(error));
  }
}

export function* watchSagaRepo() {
  yield takeLatest(LIST_REPOSITORIES, callSagaRepository);
}
