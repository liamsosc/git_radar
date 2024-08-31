import React from "react";
import { GithubOutlined, LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import * as NavbarStyles from "./Navbar.styles";
import { UserInput } from "../UserInput/UserInput";
import { debounce } from "../../utils/debounce";
import { loginWithGithub } from "../../utils/loginWithGithub";
import { NavbarProps } from "./Navbar.types";
import { userActions } from "../../redux/actions";

const Navbar: React.FC<NavbarProps> = ({ isLogin, logOutHandler }) => {
  const dispatch = useDispatch();

  const toggleAuth = () => {
    if (!isLogin) {
      loginWithGithub();
    } else {
      logOutHandler();
    }
  };

  const debouncedSearchUserChange = debounce((value: string) => {
    if (!value) return;
    dispatch(userActions.requestUser(value));
  }, 300);

  const searchUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchUserChange(e.target.value);
  };

  return (
    <NavbarStyles.NavbarWrapper>
      <NavbarStyles.NavbarContainer>
        <NavbarStyles.SearchBarContainer>
          <NavbarStyles.LogoTitle>GitRadar</NavbarStyles.LogoTitle>
          {isLogin && <UserInput handleChange={searchUserChange}/>}
        </NavbarStyles.SearchBarContainer>
          <NavbarStyles.GitHubLoginButton onClick={toggleAuth}>
            {isLogin ? (
              <span>
                <LogoutOutlined /> Logout
              </span>
            ) : (
              <span>
                <GithubOutlined /> Login to GitHub
              </span>
            )}
          </NavbarStyles.GitHubLoginButton>
      </NavbarStyles.NavbarContainer>
    </NavbarStyles.NavbarWrapper>
  );
};

export default Navbar;