import {
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";

import { getOrganizationAPI } from "../api/github";
import { organizationActions } from "../actions";
import { ActionTypes } from "../../types";
import { LIST_ORGANIZATIONS } from "../actions/constants";

type SagaGenerator = Generator<CallEffect<any> | PutEffect<any>, void, any>;

export function* callSagaOrganization(action: ActionTypes): SagaGenerator {
  try {
    yield put(organizationActions.pendingOrgs());
    const response = yield call(getOrganizationAPI, action.data);
    yield put(organizationActions.responseOrgs(response));
  } catch (error) {
    yield put(organizationActions.rejectOrgs(error));
  }
}

export function* watchSagaOrg() {
  yield takeLatest(LIST_ORGANIZATIONS, callSagaOrganization);
}
