import {
  SEARCH_USER,
  SEARCH_USER_PENDING,
  SEARCH_USER_REJECT,
  SEARCH_USER_SUCCESS,
} from "./constants";

const requestUser = (data: any) => {
  return {
    type: SEARCH_USER,
    data,
  };
};

const responseUser = (data: any) => {
  return {
    type: SEARCH_USER_SUCCESS,
    data,
  };
};

const pendingUser = () => {
  return {
    type: SEARCH_USER_PENDING,
  };
};

const rejectUser = (data: any) => {
  return {
    type: SEARCH_USER_REJECT,
    data,
  };
};

const userActions = {
  requestUser,
  responseUser,
  pendingUser,
  rejectUser,
};

export default userActions;
