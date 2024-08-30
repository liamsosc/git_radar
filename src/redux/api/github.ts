import { api } from ".";

export const getUserInfoAPI = async (user: string) => {
  try {
    let response = await api.get(
      `${process.env.REACT_APP_API_URL}/users/${user}`
    );
    let result = response.data;
    return result;
  } catch (error: any) {
    if (error.status === 404) {
      throw new Error("Not found");
    } else throw new Error(error.message);
  }
};

export const getRepositoryAPI = async (user: string) => {
  try {
    let response = await api.get(
      `${process.env.REACT_APP_API_URL}/users/${user}/repos?per_page=30&sort=asc`
    );
    let result = response.data;
    return result;
  } catch (error: any) {
    if (error.status === 404) {
      throw new Error("Not found");
    } else throw new Error(error.message);
  }
};

export const getOrganizationAPI = async (user: string) => {
  try {
    let response = await api.get(
      `${process.env.REACT_APP_API_URL}/users/${user}/orgs`
    );
    let result = response.data;
    return result;
  } catch (error: any) {
    if (error.status === 404) {
      throw new Error("Not found");
    } else throw new Error(error.message);
  }
};
