export interface RootState {
  auth: AuthState;
  user: UserState;
  repository: RepositoryState;
  organization: OrganizationState;
}

export interface AuthReducer {
  auth: AuthState;
}
export interface AuthState {
  accessToken: string;
  loading: boolean;
  error: any;
}

export interface UserReducer {
  user: UserState;
}

export interface UserState {
  user: User;
  loading: boolean;
  error: any;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
}

export interface RepoReducer {
  repository: RepositoryState;
}

export interface RepositoryState {
  repositories: Repository[];
  loading: boolean;
  error: any;
}

export interface Repository {
  id: number;
  html_url: string;
  name: string;
  description: string;
  license: any;
  updated_at: string;
  clone_url: string;
}

export interface OrganizationReducer {
  organization: OrganizationState;
}

export interface OrganizationState {
  organizations: Organization[];
  loading: boolean;
  error: any;
}

export interface Organization {
  id: number;
  login: string;
  avatar_url: string;
  description: string;
}

export type ActionTypes = { type: string; data: any };
