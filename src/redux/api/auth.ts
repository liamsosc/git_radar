import { api } from ".";

export const getAccessTokenAPI = async (code: string) => {
    try {
        const response = await api.get(`${process.env.REACT_APP_BACK_END_URL}/getAccessToken?code=${code}`);
        const result = response.data;
        return result;
    } catch (error: any) {
        throw new Error(error);
    }
  };