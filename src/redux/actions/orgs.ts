import {
    FETCH_ORGANIZATIONS_PENDING,
    FETCH_ORGANIZATIONS_REJECT,
    FETCH_ORGANIZATIONS_SUCCESS,
    LIST_ORGANIZATIONS
  } from ".";
  
  export const requestOrgs = (data: any) => {
    return {
      type: LIST_ORGANIZATIONS,
      data,
    };
  };
  export const responseOrgs = (data: any) => {
    return {
      type: FETCH_ORGANIZATIONS_SUCCESS,
      data,
    };
  };
  
  export const pendingOrgs = () => {
    return {
      type: FETCH_ORGANIZATIONS_PENDING,
    };
  };
  
  export const rejectOrgs = (data: any) => {
    return {
      type: FETCH_ORGANIZATIONS_REJECT,
      data,
    };
  };
  