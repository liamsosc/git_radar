import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';

import { AuthReducer } from '../types';
import { authActions } from '../redux/actions';

const useAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(!!window.localStorage.getItem("accessToken"));
  const accessToken = useSelector((state: AuthReducer) => state.auth.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!window.localStorage.getItem("accessToken")) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const codeParam = urlParams.get("code");

      if (codeParam) {
        dispatch(authActions.requestAuth(codeParam));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (accessToken) {
      window.localStorage.setItem("accessToken", accessToken);
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.delete("code");
      window.history.replaceState({}, "", `${window.location.pathname}?${urlParams}`);
      setIsLogin(true);
      message.success('Login successfully!');

    }
  }, [accessToken]);

  const logOut = () => {
    window.localStorage.removeItem("accessToken");
    setIsLogin(false);
    message.success('Logout successfully!');

  };

  return { isLogin, logOut };
};

export default useAuth;