import React from "react";
import { Repository } from "../../types";
import { CopyOutlined, LinkOutlined } from "@ant-design/icons";
import { Tooltip, message } from "antd";
import {
  ActionContainer,
  RepositoryCardContainer,
  License,
  RepoDetails,
  RepoName,
  CloneButton,
} from "./RepositoriesCard.styles";

interface RepositoryCardProps {
  repo: Repository;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
  const handleCloneClick = () => {
    navigator.clipboard.writeText(`git clone ${repo.clone_url}`);
    message.success("Clone command copied to clipboard!");
  };

  const handleCardClick = () => {
    window.open(repo.html_url, "_blank");
  };

  return (
    <RepositoryCardContainer onClick={handleCardClick}>
      <RepoName>
        {repo.name} <LinkOutlined style={{ marginLeft: "8px" }} />
      </RepoName>
      <RepoDetails>
        {repo.description || "No description provided."}
      </RepoDetails>
      <RepoDetails>
        Last updated: {new Date(repo.updated_at).toLocaleDateString()}
      </RepoDetails>
      {repo.license && <License>License: {repo.license.name}</License>}
      <ActionContainer>
        <Tooltip title="Copy git clone command">
          <CloneButton
            icon={<CopyOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              handleCloneClick();
            }}
          >
            Clone
          </CloneButton>
        </Tooltip>
      </ActionContainer>
    </RepositoryCardContainer>
  );
};
