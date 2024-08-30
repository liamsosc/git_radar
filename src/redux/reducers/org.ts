import { ActionTypes, OrganizationState } from "../../types";
import { FETCH_ORGANIZATIONS_PENDING, FETCH_ORGANIZATIONS_REJECT, FETCH_ORGANIZATIONS_SUCCESS } from "../actions";

const initialState: OrganizationState = {
  organizations: [],
  loading: false,
  error: "",
};

const orgReducer = (
  state = initialState,
  action: ActionTypes
): OrganizationState => {
  switch (action.type) {
    case FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        organizations: action.data,
        loading: false,
        error: "",
      };
    case FETCH_ORGANIZATIONS_REJECT:
      return {
        ...state,
        organizations: [],
        loading: false,
        error: action.data,
      };
    case FETCH_ORGANIZATIONS_PENDING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    default:
      return state;
  }
};

export default orgReducer;
