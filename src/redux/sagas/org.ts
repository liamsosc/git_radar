import { ActionTypes } from "../../types";
import { LIST_ORGANIZATIONS } from "../actions";
import {
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { getOrganizationAPI } from "../api/github";
import { pendingOrgs, rejectOrgs, responseOrgs } from "../actions/orgs";

type SagaGenerator = Generator<CallEffect<any> | PutEffect<any>, void, any>;

function* callSagaOrganization(action: ActionTypes): SagaGenerator {
  try {
    yield put(pendingOrgs());
    const response = yield call(getOrganizationAPI, action.data);
    yield put(responseOrgs(response));
  } catch (error) {
    yield put(rejectOrgs(error));
  }
}

export function* watchSagaOrg() {
  yield takeLatest(LIST_ORGANIZATIONS, callSagaOrganization);
}
