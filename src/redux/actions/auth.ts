import {
  AUTHORIZE_SESSION,
  AUTHORIZE_SESSION_PENDING,
  AUTHORIZE_SESSION_REJECT,
  AUTHORIZE_SESSION_SUCCESS,
} from ".";

export const requestAuth = (data: any) => {
  return {
    type: AUTHORIZE_SESSION,
    data,
  };
};

export const responseAuth = (data: any) => {
  return {
    type: AUTHORIZE_SESSION_SUCCESS,
    data,
  };
};

export const rejectAuth = (data: any) => {
  return {
    type: AUTHORIZE_SESSION_REJECT,
    data,
  };
};
export const pendingAuth = () => {
  return {
    type: AUTHORIZE_SESSION_PENDING,
  };
};
