import React from "react";
import styled from "styled-components";
import { Content } from "./components/Container/Container";
import { Navbar } from "./components/Navbar/Navbar";
import { message, Spin } from "antd";
import { Profile } from "./components/UserProfile/Profile/Profile";
import { useAuth } from "./hooks/useAuth";
import NoDataSection from "./components/Shared/NoData/NoDataSection";
import RequiredLoginSection from "./components/Shared/RequiredLogin/RequireLoginSection";
import { OrganizationsSection } from "./components/Organizations/OrganizationsSection/OrganizationSection";
import { RepositoriesSection } from "./components/Repositories/RepositoriesSection/RepositoriesSection";
import { useUser } from "./hooks/useUser";
import { useRepo } from "./hooks/useRepo";
import { useOrg } from "./hooks/useOrg";

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, #ff6f61, #ffcc70);
  min-height: 100vh;
  color: #000;
  padding: 20px;
`;

const App: React.FC = () => {
  const { isLogin, logOut } = useAuth();
  const { user, userError, userLoading } = useUser();
  const { repositories, repoLoading, repoError } = useRepo();
  const { organizations, orgLoading, orgError } = useOrg();

  React.useEffect(() => {
    if (userError?.message) message.error(userError.message);
    if (repoError?.message) message.error(repoError.message);
    if(orgError?.message) message.error(orgError.message);
  }, [userError,repoError,orgError]);

  const renderContent = () => {
    if (isLogin) {
      if (userLoading || repoLoading || orgLoading) {
        return <Spin size="large" />;
      }

      if (!user?.login) {
        return <NoDataSection />;
      }

      return (
        <>
          <Profile profile={user} loading={userLoading} />
          <RepositoriesSection
            repositories={repositories}
            loading={repoLoading}
          />
          <OrganizationsSection
            organizations={organizations}
            loading={orgLoading}
          />
        </>
      );
    }

    return <RequiredLoginSection />;
  };

  return (
    <AppContainer>
      <Navbar isLogin={isLogin} logOutHandler={logOut} />
      <Content>{renderContent()}</Content>
    </AppContainer>
  );
};

export default App;
