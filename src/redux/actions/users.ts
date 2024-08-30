import {
    SEARCH_USER,
    SEARCH_USER_PENDING,
    SEARCH_USER_REJECT,
    SEARCH_USER_SUCCESS,
  } from ".";
  
  export const requestUser = (data: any) => {
    return {
      type: SEARCH_USER,
      data,
    };
  };
  
  export const responseUser = (data: any) => {
    return {
      type: SEARCH_USER_SUCCESS,
      data,
    };
  };
  
  export const pendingUser = () => {
    return {
      type: SEARCH_USER_PENDING,
    };
  };
  
  export const rejectUser = (data: any) => {
    return {
      type: SEARCH_USER_REJECT,
      data,
    };
  };