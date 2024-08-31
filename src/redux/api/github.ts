import { api } from ".";

export const getUserInfoAPI = async (user: string) => {
  try {
    const response = await api.get(
      `${process.env.REACT_APP_API_URL}/users/${user}`
    );
    const result = response.data;
    return result;
  } catch (error: any) {
    if (error.status === 404) {
      throw new Error("Not found");
    } else throw new Error(error.message);
  }
};

export const getRepositoryAPI = async (user: string) => {
  try {
    const response = await api.get(
      `${process.env.REACT_APP_API_URL}/users/${user}/repos?per_page=30&sort=asc`
    );
    const result = response.data;
    return result;
  } catch (error: any) {
    if (error.status === 404) {
      throw new Error("Not found");
    } else throw new Error(error.message);
  }
};

export const getOrganizationAPI = async (user: string) => {
  try {
    const response = await api.get(
      `${process.env.REACT_APP_API_URL}/users/${user}/orgs`
    );
    const result = response.data;
    return result;
  } catch (error: any) {
    if (error.status === 404) {
      throw new Error("Not found");
    } else throw new Error(error.message);
  }
};
