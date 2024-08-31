import React from 'react';

import { ContentWrapper, ContentContainer } from './Container.styles';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <ContentWrapper>
      <ContentContainer>
        {children}
      </ContentContainer>
    </ContentWrapper>
  );
};

export default Content;