import React from 'react';
import { OrganizationCard } from './OrganizationCard';
import { Organization } from '../../types';
import { Spin, Typography } from 'antd';
import { CardContainer, Section, Title } from './OrganizationSection.styles';


interface OrganizationsSectionProps {
  organizations: Organization[];
  loading: boolean;
}

export const OrganizationsSection: React.FC<OrganizationsSectionProps> = ({ organizations, loading }) => {
  if (loading) return <Spin size="large" />;

  return (
    <Section>
      <Title>Organizations</Title>
      <CardContainer>
        {organizations.length > 0 ?organizations.map(org => (
          <OrganizationCard key={org.id} org={org} />
        )) : <Typography.Paragraph>No organizations found</Typography.Paragraph>}
      </CardContainer>
    </Section>
  );
};
