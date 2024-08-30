import {
  FETCH_REPOSITORIES_PENDING,
  FETCH_REPOSITORIES_REJECT,
  FETCH_REPOSITORIES_SUCCESS,
  LIST_REPOSITORIES,
} from ".";

export const requestRepos = (data: any) => {
  return {
    type: LIST_REPOSITORIES,
    data,
  };
};

export const responseRepos = (data: any) => {
  return {
    type: FETCH_REPOSITORIES_SUCCESS,
    data,
  };
};

export const pendingRepos = () => {
  return {
    type: FETCH_REPOSITORIES_PENDING,
  };
};

export const rejectRepos = (data: any) => {
  return {
    type: FETCH_REPOSITORIES_REJECT,
    data,
  };
};
