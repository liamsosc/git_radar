import React from "react";
import { Input } from "antd";
import styled from "styled-components";

interface UserInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
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

export const UserInput: React.FC<UserInputProps> = ({ handleChange }) => {
  return (
    <StyledInput placeholder="Enter GitHub username" onChange={handleChange} />
  );
};
