import React from "react";
import {
  GithubOutlined,
  CalendarOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Spin } from "antd";
import * as ProfileStyles from "./Profile.styles";
import {  ProfileProps } from "../UserProfile.types";
import { ProfileItem } from "../ProfileItem/ProfileItem";


export const Profile: React.FC<ProfileProps> = ({
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
    <ProfileStyles.ProfileCard>
      <ProfileStyles.Avatar src={avatar_url} alt="Avatar" />
      <ProfileStyles.Name>{name}</ProfileStyles.Name>
      <ProfileStyles.Bio>{bio || "No bio available"}</ProfileStyles.Bio>
      <ProfileStyles.InfoContainer>
        <ProfileItem
          icon={<GithubOutlined />}
          label={
            <ProfileStyles.ProfileLink href={html_url} target="_blank">
              @{login}
            </ProfileStyles.ProfileLink>
          }
        />
        <ProfileItem
          icon={<CalendarOutlined />}
          label={`Joined: ${new Date(created_at).toLocaleDateString()}`}
        />
        <ProfileItem
          icon={<UsergroupAddOutlined />}
          label={`Followers: ${followers}`}
        />
        <ProfileItem
          icon={<UsergroupDeleteOutlined />}
          label={`Following: ${following}`}
        />
        <ProfileItem
          icon={<FileTextOutlined />}
          label={`Public Repos: ${public_repos}`}
        />
      </ProfileStyles.InfoContainer>
    </ProfileStyles.ProfileCard>
  );
};
