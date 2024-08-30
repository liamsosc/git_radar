import { ActionTypes, AuthState } from "../../types";
import {
  AUTHORIZE_SESSION_PENDING,
  AUTHORIZE_SESSION_REJECT,
  AUTHORIZE_SESSION_SUCCESS,
} from "../actions";

const initialState: AuthState = {
  accessToken: "",
  loading: false,
  error: {},
};

const authReducer = (
  state = initialState,
  action: ActionTypes
): AuthState => {
  switch (action.type) {
    case AUTHORIZE_SESSION_SUCCESS:
      return {
        ...state,
        accessToken: action.data.access_token,
        loading: false,
      };
    case AUTHORIZE_SESSION_REJECT:
      return {
        ...state,
        accessToken: "",
        loading: false,
        error: action.data,
      };
    case AUTHORIZE_SESSION_PENDING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
