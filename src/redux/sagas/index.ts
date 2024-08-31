import { all } from "redux-saga/effects";

import { watchSagaAuth } from "./auth";
import { watchSagaOrg } from "./org";
import { watchSagaRepo } from "./repo";
import { watchSagaUser } from "./user";

export default function* rootSagas() {
  yield all([
    watchSagaAuth(),
    watchSagaOrg(),
    watchSagaRepo(),
    watchSagaUser(),
  ]);
}
