import React from "react";
import { CopyOutlined } from "@ant-design/icons";
import { Tooltip, message } from "antd";
import * as RepoCardStyles from "./RepositoriesCard.styles";
import { RepositoryCardProps } from "../Repositories.types";

export const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
  const handleCloneClick = () => {
    navigator.clipboard.writeText(`git clone ${repo.clone_url}`);
    message.success("Clone command copied to clipboard!");
  };

  const handleCardClick = () => {
    window.open(repo.html_url, "_blank");
  };

  return (
    <RepoCardStyles.RepositoryCardContainer onClick={handleCardClick}>
      <RepoCardStyles.RepoName>
        {repo.name} <RepoCardStyles.LinkedIcon />
      </RepoCardStyles.RepoName>
      <RepoCardStyles.RepoDetails>
        {repo.description || "No description provided."}
      </RepoCardStyles.RepoDetails>
      <RepoCardStyles.RepoDetails>
        Last updated: {new Date(repo.updated_at).toLocaleDateString()}
      </RepoCardStyles.RepoDetails>
      {repo.license && <RepoCardStyles.License>License: {repo.license.name}</RepoCardStyles.License>}
      <RepoCardStyles.ActionContainer>
        <Tooltip title="Copy git clone command">
          <RepoCardStyles.CloneButton
            icon={<CopyOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              handleCloneClick();
            }}
          >
            Clone
          </RepoCardStyles.CloneButton>
        </Tooltip>
      </RepoCardStyles.ActionContainer>
    </RepoCardStyles.RepositoryCardContainer>
  );
};
