import React from "react";
import { Typography } from "antd";
import { NoDataContainer } from "./NoData.styles";
import { GithubFilled } from "@ant-design/icons";

const NoDataSection: React.FC = () => {
  return (
    <NoDataContainer>
      <GithubFilled style={{ fontSize: "50px", color: "#000" }} />
      <Typography.Title level={3}>Search Github Username</Typography.Title>
      <Typography.Paragraph>
        To get started, please enter a GitHub username in the search bar above.
      </Typography.Paragraph>
    </NoDataContainer>
  );
};

export default NoDataSection;
