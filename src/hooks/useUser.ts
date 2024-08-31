import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserReducer } from "../types";
import { organizationActions, repositoryActions } from "../redux/actions";

const useUser = () => {
  const dispatch = useDispatch();
  const {
    user,
    error: userError,
    loading: userLoading,
  } = useSelector((state: UserReducer) => state.user);

  useEffect(() => {
    if (user?.login && !userError) {
      dispatch(repositoryActions.requestRepos(user.login));
      dispatch(organizationActions.requestOrgs(user.login));
    }
  }, [user, userError, dispatch]);

  return { user, userError, userLoading };
};

export default useUser;
