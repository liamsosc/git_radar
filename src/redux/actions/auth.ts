import {
  AUTHORIZE_SESSION,
  AUTHORIZE_SESSION_PENDING,
  AUTHORIZE_SESSION_REJECT,
  AUTHORIZE_SESSION_SUCCESS,
} from "./constants";

const requestAuth = (data: any) => {
  return {
    type: AUTHORIZE_SESSION,
    data,
  };
};

const responseAuth = (data: any) => {
  return {
    type: AUTHORIZE_SESSION_SUCCESS,
    data,
  };
};

const rejectAuth = (data: any) => {
  return {
    type: AUTHORIZE_SESSION_REJECT,
    data,
  };
};
const pendingAuth = () => {
  return {
    type: AUTHORIZE_SESSION_PENDING,
  };
};

const authActions = {
  requestAuth,
  responseAuth,
  rejectAuth,
  pendingAuth,
};

export default authActions;
