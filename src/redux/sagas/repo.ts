import {
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";

import { ActionTypes } from "../../types";
import { LIST_REPOSITORIES } from "../actions/constants";
import { getRepositoryAPI } from "../api/github";
import { repositoryActions } from "../actions";

type SagaGenerator = Generator<CallEffect<any> | PutEffect<any>, void, any>;

export function* callSagaRepository(action: ActionTypes): SagaGenerator {
  try {
    yield put(repositoryActions.pendingRepos());
    const response = yield call(getRepositoryAPI, action.data);
    yield put(repositoryActions.responseRepos(response));
  } catch (error) {
    yield put(repositoryActions.rejectRepos(error));
  }
}

export function* watchSagaRepo() {
  yield takeLatest(LIST_REPOSITORIES, callSagaRepository);
}
