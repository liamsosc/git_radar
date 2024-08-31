import { ActionTypes, RepositoryState } from "../../types";
import {
  FETCH_REPOSITORIES_PENDING,
  FETCH_REPOSITORIES_REJECT,
  FETCH_REPOSITORIES_SUCCESS,
} from "../actions/constants";

const initialState: RepositoryState = {
  repositories: [],
  loading: false,
  error: "",
};

const repoReducer = (
  state = initialState,
  action: ActionTypes
): RepositoryState => {
  switch (action.type) {
    case FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.data,
        error: "",
        loading: false,
      };
    case FETCH_REPOSITORIES_REJECT:
      return {
        ...state,
        repositories: [],
        loading: false,
        error: action.data,
      };
    case FETCH_REPOSITORIES_PENDING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    default:
      return state;
  }
};

export default repoReducer;
