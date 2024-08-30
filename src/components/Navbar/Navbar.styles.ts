import styled from "styled-components";
import { Button, Input } from "antd";

export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  padding: 0;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #fff;
  color: #000;
  border-radius: 15px;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const SearchBarContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  max-width: 600px;
  margin-right: 20px;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  border-radius: 25px;
  border: 2px solid #40a9ff;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  color: #000;
  transition: all 0.3s ease;

  &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const GitHubLoginButton = styled(Button)`
  border-radius: 25px;
  background: linear-gradient(135deg, #40a9ff, #1890ff);
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #1890ff, #40a9ff);
    opacity: 0.9;
  }
`;

export const LogoTitle = styled.p`
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 18px;
`;
