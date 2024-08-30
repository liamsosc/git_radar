import React from "react";
import { User } from "../../types";
import {
  GithubOutlined,
  CalendarOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import {Spin } from "antd";
import {
  Avatar,
  Bio,
  InfoContainer,
  InfoIcon,
  InfoItem,
  Name,
  ProfileCard,
  ProfileLink,
} from "./UserProfile.styles";

interface UserProfileProps {
  profile: User;
  loading: boolean;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  profile,
  loading,
}) => {
  const {
    avatar_url,
    html_url,
    name,
    bio,
    created_at,
    followers,
    following,
    public_repos,
    login,
  } = profile;

  if (loading) return <Spin size="large" />;

  return (
    <ProfileCard>
      <Avatar src={avatar_url} alt="Avatar" />
      <Name>{name}</Name>
      <Bio>{bio || "No bio available"}</Bio>
      <InfoContainer>
        <InfoItem>
          <InfoIcon>
            <GithubOutlined />
          </InfoIcon>
          <span>
            <ProfileLink href={html_url} target="_blank">
              @{login}
            </ProfileLink>
          </span>
        </InfoItem>
        <InfoItem>
          <InfoIcon>
            <CalendarOutlined />
          </InfoIcon>
          <span>Joined: {new Date(created_at).toLocaleDateString()}</span>
        </InfoItem>
        <InfoItem>
          <InfoIcon>
            <UsergroupAddOutlined />
          </InfoIcon>
          <span>Followers: {followers}</span>
        </InfoItem>
        <InfoItem>
          <InfoIcon>
            <UsergroupDeleteOutlined />
          </InfoIcon>
          <span>Following: {following}</span>
        </InfoItem>
        <InfoItem>
          <InfoIcon>
            <FileTextOutlined />
          </InfoIcon>
          <span>Public Repos: {public_repos}</span>
        </InfoItem>
      </InfoContainer>
    </ProfileCard>
  );
};
