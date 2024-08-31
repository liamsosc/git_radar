import React from 'react';
import { Avatar, Card } from 'antd';

import { OrgName } from './OrganizationCard.styles';
import { OrganizationCardProps } from '../Organizations.types';


export const OrganizationCard: React.FC<OrganizationCardProps> = ({ org }) => {
  return (
    <Card>
      <Avatar src={org.avatar_url} alt="Avatar" />
      <OrgName>{org.login}</OrgName>
    </Card>
  );
};
