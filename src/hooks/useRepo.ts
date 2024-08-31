import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RepoReducer } from "../types";
import { message } from "antd";

export const useRepo = () => {
  const { repositories, loading: repoLoading, error: repoError } = useSelector(
    (state: RepoReducer) => state.repository
  );

  useEffect(() => {
    if (repoError?.message) {
      message.error(repoError.message);
    }
  }, [repoError]);

  return { repositories, repoLoading, repoError };
};
