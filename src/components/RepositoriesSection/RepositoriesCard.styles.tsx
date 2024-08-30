import styled from "styled-components";
import { Button } from "antd";

export const RepositoryCardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    border-color: #40a9ff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }
`;

export const RepoName = styled.h3`
  margin: 0 0 10px;
  color: #333;
  display: flex;
  align-items: center;
`;

export const RepoDetails = styled.p`
  margin: 5px 0;
  color: #555;
  font-size: 14px;
`;

export const License = styled.span`
  display: inline-block;
  font-size: 12px;
  background: #f0f4f8;
  padding: 3px 8px;
  border-radius: 12px;
  color: #888;
  margin-top: 5px;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const CloneButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: #40a9ff;
  color: #fff;
  border: none;
  &:hover {
    background-color: #1890ff;
  }
`;
