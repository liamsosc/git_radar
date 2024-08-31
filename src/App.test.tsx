import { call, put, takeLatest } from "redux-saga/effects";
import { callSagaUser, watchSagaUser } from "./redux/sagas/user";
import {
  getUserInfoAPI,
  getRepositoryAPI,
  getOrganizationAPI,
} from "./redux/api/github";
import { ActionTypes } from "./types";
import {
  LIST_ORGANIZATIONS,
  LIST_REPOSITORIES,
  SEARCH_USER,
} from "./redux/actions/constants";
import { callSagaRepository } from "./redux/sagas/repo";
import { organizationActions, repositoryActions, userActions } from "./redux/actions";
import { callSagaOrganization } from "./redux/sagas/org";

// Mock API
jest.mock("../src/redux/api/github");

const mockedGetUserInfoAPI = getUserInfoAPI as jest.Mock;
const mockedGetRepositoriesAPI = getRepositoryAPI as jest.Mock;
const mockedGetOrganizationsAPI = getOrganizationAPI as jest.Mock;

describe("callSagaUser Saga", () => {
  const action: ActionTypes = { type: SEARCH_USER, data: "John" };

  it("should handle successful API call", () => {
    const response = { name: "John Doe", login: "johndoe" };
    const generator = callSagaUser(action);

    expect(generator.next().value).toEqual(put(userActions.pendingUser()));
    expect(generator.next().value).toEqual(
      call(mockedGetUserInfoAPI, action.data)
    );
    expect(generator.next(response).value).toEqual(put(userActions.responseUser(response)));
    expect(generator.next().done).toBe(true);
  });

  it("should handle API call failure", () => {
    const error = new Error("Failed to fetch user");
    const generator = callSagaUser(action);

    expect(generator.next().value).toEqual(put(userActions.pendingUser()));
    expect(generator.next().value).toEqual(
      call(mockedGetUserInfoAPI, action.data)
    );
    expect(generator.throw(error).value).toEqual(put(userActions.rejectUser(error)));
    expect(generator.next().done).toBe(true);
  });
});

describe("watchSagaUser Saga", () => {
  it("should take latest SEARCH_USER action", () => {
    const generator = watchSagaUser();

    expect(generator.next().value).toEqual(
      takeLatest(SEARCH_USER, callSagaUser)
    );
    expect(generator.next().done).toBe(true);
  });
});

describe("callSagaUser Saga", () => {
  const action: ActionTypes = { type: SEARCH_USER, data: "John" };

  it("should handle successful API call", () => {
    const response = { name: "John McGrath", login: "john" };
    const generator = callSagaUser(action);

    expect(generator.next().value).toEqual(put(userActions.pendingUser()));
    expect(generator.next().value).toEqual(
      call(mockedGetUserInfoAPI, action.data)
    );
    expect(generator.next(response).value).toEqual(put(userActions.responseUser(response)));
    expect(generator.next().done).toBe(true);
  });

  it("should handle API call failure", () => {
    const error = new Error("Failed to fetch user");
    const generator = callSagaUser(action);

    expect(generator.next().value).toEqual(put(userActions.pendingUser()));
    expect(generator.next().value).toEqual(
      call(mockedGetUserInfoAPI, action.data)
    );
    expect(generator.throw(error).value).toEqual(put(userActions.rejectUser(error)));
    expect(generator.next().done).toBe(true);
  });
});

describe("watchSagaUser Saga", () => {
  it("should take latest SEARCH_USER action", () => {
    const generator = watchSagaUser();

    expect(generator.next().value).toEqual(
      takeLatest(SEARCH_USER, callSagaUser)
    );
    expect(generator.next().done).toBe(true);
  });
});

describe("callSagaRepositories Saga", () => {
  const action: ActionTypes = { type: LIST_REPOSITORIES, data: "john" };

  it("should handle successful API call", () => {
    const response = [{ name: "SWEET_python" }, { name: "pacta-web" }];
    const generator = callSagaRepository(action);

    expect(generator.next().value).toEqual(put(repositoryActions.pendingRepos()));
    expect(generator.next().value).toEqual(
      call(mockedGetRepositoriesAPI, action.data)
    );
    expect(generator.next(response).value).toEqual(
      put(repositoryActions.responseRepos(response))
    );
    expect(generator.next().done).toBe(true);
  });

  it("should handle API call failure", () => {
    const error = new Error("Failed to fetch repositories");
    const generator = callSagaRepository(action);

    expect(generator.next().value).toEqual(put(repositoryActions.pendingRepos()));
    expect(generator.next().value).toEqual(
      call(mockedGetRepositoriesAPI, action.data)
    );
    expect(generator.throw(error).value).toEqual(put(repositoryActions.rejectRepos(error)));
    expect(generator.next().done).toBe(true);
  });
});

describe("callSagaOrganizations Saga", () => {
  const action: ActionTypes = { type: LIST_ORGANIZATIONS, data: "john" };

  it("should handle successful API call", () => {
    const response = [{ name: "RMI" }];
    const generator = callSagaOrganization(action);

    expect(generator.next().value).toEqual(put(organizationActions.pendingOrgs()));
    expect(generator.next().value).toEqual(
      call(mockedGetOrganizationsAPI, action.data)
    );
    expect(generator.next(response).value).toEqual(put(organizationActions.responseOrgs(response)));
    expect(generator.next().done).toBe(true);
  });

  it("should handle API call failure", () => {
    const error = new Error("Failed to fetch organizations");
    const generator = callSagaOrganization(action);

    expect(generator.next().value).toEqual(put(organizationActions.pendingOrgs()));
    expect(generator.next().value).toEqual(
      call(mockedGetOrganizationsAPI, action.data)
    );
    expect(generator.throw(error).value).toEqual(put(organizationActions.rejectOrgs(error)));
    expect(generator.next().done).toBe(true);
  });
});
