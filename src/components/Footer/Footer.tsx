import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
  background-color: transparent;
  padding: 20px 50px;
  font-size: 14px;
  color: #fff;
`;

const CustomFooter: React.FC = () => (
  <StyledFooter>
    © 2024 SmartOSC | Developed by Liam Nguyen
  </StyledFooter>
);

export default CustomFooter;
