import {
  FETCH_REPOSITORIES_PENDING,
  FETCH_REPOSITORIES_REJECT,
  FETCH_REPOSITORIES_SUCCESS,
  LIST_REPOSITORIES,
} from "./constants";

const requestRepos = (data: any) => {
  return {
    type: LIST_REPOSITORIES,
    data,
  };
};

const responseRepos = (data: any) => {
  return {
    type: FETCH_REPOSITORIES_SUCCESS,
    data,
  };
};

const pendingRepos = () => {
  return {
    type: FETCH_REPOSITORIES_PENDING,
  };
};

const rejectRepos = (data: any) => {
  return {
    type: FETCH_REPOSITORIES_REJECT,
    data,
  };
};

const repositoryActions = {
  requestRepos,
  responseRepos,
  pendingRepos,
  rejectRepos,
};

export default repositoryActions;