import React from 'react';
import { Spin, Typography } from 'antd';

import { Organization } from '../../../types';
import { CardContainer, Section, Title } from './OrganizationSection.styles';
import { OrganizationCard } from '../OrganizationCard/OrganizationCard';
import { OrganizationsSectionProps } from '../Organizations.types';



const OrganizationsSection: React.FC<OrganizationsSectionProps> = ({ organizations, loading }) => {
  if (loading) return <Spin size="large" />;

  return (
    <Section>
      <Title>Organizations</Title>
      <CardContainer>
        {organizations.length > 0 ?organizations.map((org: Organization) => (
          <OrganizationCard key={org.id} org={org} />
        )) : <Typography.Paragraph>No organizations found</Typography.Paragraph>}
      </CardContainer>
    </Section>
  );
};

export default OrganizationsSection;