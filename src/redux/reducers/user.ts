import { ActionTypes, UserState, User } from "../../types";
import {
  SEARCH_USER_PENDING,
  SEARCH_USER_REJECT,
  SEARCH_USER_SUCCESS,
} from "../actions/constants";

const initialState: UserState = {
  user: {} as User,
  loading: false,
  error: {},
};

const userReducer = (
  state = initialState,
  action: ActionTypes
): UserState => {
  switch (action.type) {
    case SEARCH_USER_SUCCESS:
        return {
            ...state,
            user: action.data,
            error: "",
            loading: false,
        };
    case SEARCH_USER_REJECT:
        return {
            ...state,
            loading: false,
            error: action.data,
        };
    case SEARCH_USER_PENDING:
        return {
            ...state,
            error: "",
            loading: true,
        };
    default:
      return state;
  }
};

export default userReducer;
