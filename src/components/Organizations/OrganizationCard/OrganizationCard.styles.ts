import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    border-color: #40a9ff;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const OrgName = styled.h3`
  margin: 0;
`;