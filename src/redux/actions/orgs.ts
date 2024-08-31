import {
    FETCH_ORGANIZATIONS_PENDING,
    FETCH_ORGANIZATIONS_REJECT,
    FETCH_ORGANIZATIONS_SUCCESS,
    LIST_ORGANIZATIONS
  } from "./constants";
  
const requestOrgs = (data: any) => {
    return {
      type: LIST_ORGANIZATIONS,
      data,
    };
  };
const responseOrgs = (data: any) => {
    return {
      type: FETCH_ORGANIZATIONS_SUCCESS,
      data,
    };
  };
  
const pendingOrgs = () => {
    return {
      type: FETCH_ORGANIZATIONS_PENDING,
    };
  };
  
const rejectOrgs = (data: any) => {
    return {
      type: FETCH_ORGANIZATIONS_REJECT,
      data,
    };
  };

const organizationActions = {
  requestOrgs,
  responseOrgs,
  pendingOrgs,
  rejectOrgs,
};
export default organizationActions;