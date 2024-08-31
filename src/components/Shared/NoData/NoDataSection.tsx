import React from "react";
import { Typography } from "antd";
import { NoDataContainer } from "./NoData.styles";

const NoDataSection: React.FC = () => {
  return (
    <NoDataContainer>
      <Typography.Title level={3}>Search Github Username</Typography.Title>
      <Typography.Paragraph>
        To get started, please enter a GitHub username in the search bar above.
      </Typography.Paragraph>
    </NoDataContainer>
  );
};

export default NoDataSection;
