import React from 'react';
import { Typography } from 'antd';
import { RequiredLoginContainer } from './RequiredLogin.styles';

const RequiredLoginSection: React.FC = () => {
  return (
    <RequiredLoginContainer>
      <Typography.Title level={3}>Please Log In</Typography.Title>
      <Typography.Paragraph>
        To explore GitHub profile, repositories, and organizations, please log in to GitHub.
      </Typography.Paragraph>
    </RequiredLoginContainer>
  );
};

export default RequiredLoginSection;
