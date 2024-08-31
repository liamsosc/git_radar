import React from 'react';
import { Typography } from 'antd';
import { RequiredLoginContainer } from './RequiredLogin.styles';
import { LockTwoTone } from '@ant-design/icons';

const RequiredLoginSection: React.FC = () => {
  return (
    <RequiredLoginContainer>
      <LockTwoTone style={{ fontSize: "50px", color: "#000" }} />
      <Typography.Title level={3}>Please Log In</Typography.Title>
      <Typography.Paragraph>
        To explore GitHub profile, repositories, and organizations, please log in to GitHub.
      </Typography.Paragraph>
    </RequiredLoginContainer>
  );
};

export default RequiredLoginSection;
