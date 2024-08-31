import React from "react";
import { StyledInput } from "./UserInput.styles";
import { UserInputProps } from "./UserInput.types";

export const UserInput: React.FC<UserInputProps> = ({ handleChange }) => {
  return (
    <StyledInput placeholder="Enter GitHub username" onChange={handleChange} />
  );
};
