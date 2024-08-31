import { useEffect } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";

import { RepoReducer } from "../types";

const useRepo = () => {
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

export default useRepo;