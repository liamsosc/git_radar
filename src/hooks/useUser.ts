import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserReducer } from "../types";
import { requestRepos } from "../redux/actions/repos";
import { requestOrgs } from "../redux/actions/orgs";

export const useUser = () => {
  const dispatch = useDispatch();
  const { user, error: userError, loading: userLoading } = useSelector(
    (state: UserReducer) => state.user
  );

  useEffect(() => {
    if (user?.login && !userError) {
      dispatch(requestRepos(user.login));
      dispatch(requestOrgs(user.login));
    }
  }, [user, userError, dispatch]);

  return { user, userError, userLoading };
};
