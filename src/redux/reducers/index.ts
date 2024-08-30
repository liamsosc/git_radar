import { combineReducers } from "redux";
import authReducer from "./auth";
import { RootState } from "../../types";

import userReducer from "./user";
import repoReducer from "./repo";
import orgReducer from "./org";

const rootReducer = combineReducers<RootState>({
  auth: authReducer as any,
  user: userReducer as any,
  repository: repoReducer as any,
  organization: orgReducer as any,
});

export default rootReducer;
