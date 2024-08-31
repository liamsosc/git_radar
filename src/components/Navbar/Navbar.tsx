import React from "react";
import { GithubOutlined, LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import {
  NavbarWrapper,
  NavbarContainer,
  SearchBarContainer,
  GitHubLoginButton,
  LogoTitle,
} from "./Navbar.styles";
import { UserInput } from "../UserInput/UserInput";
import { debounce } from "../../utils/debounce";
import { loginWithGithub } from "../../utils/loginWithGithub";
import { requestUser } from "../../redux/actions/users";

interface NavbarProps {
  isLogin: boolean;
  logOutHandler: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isLogin, logOutHandler }) => {
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
    dispatch(requestUser(value));
  }, 300);

  const searchUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchUserChange(e.target.value);
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <SearchBarContainer>
          <LogoTitle>GitRadar</LogoTitle>
          {isLogin && <UserInput handleChange={searchUserChange}/>}
        </SearchBarContainer>
          <GitHubLoginButton onClick={toggleAuth}>
            {isLogin ? (
              <span>
                <LogoutOutlined /> Logout
              </span>
            ) : (
              <span>
                <GithubOutlined /> Login to GitHub
              </span>
            )}
          </GitHubLoginButton>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
