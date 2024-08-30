import React from 'react';
import { Organization } from '../../types';
import { Avatar, Card, OrgName } from './OrganizationCard.styles';


interface OrganizationCardProps {
  org: Organization;
}

export const OrganizationCard: React.FC<OrganizationCardProps> = ({ org }) => {
  return (
    <Card>
      <Avatar src={org.avatar_url} alt="Avatar" />
      <OrgName>{org.login}</OrgName>
    </Card>
  );
};
