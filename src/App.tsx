import React from "react";
import styled from "styled-components";
import { Content } from "./components/Container/Container";
import { Navbar } from "./components/Navbar/Navbar";
import { OrganizationReducer, RepoReducer, UserReducer } from "./types";
import { OrganizationsSection } from "./components/OrganizationsSection/OrganizationSection";
import { RepositoriesSection } from "./components/RepositoriesSection/RepositoriesSection";
import { message, Spin } from "antd";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { requestOrgs } from "./redux/actions/orgs";
import { requestRepos } from "./redux/actions/repos";
import { useAuth } from "./hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
import NoDataSection from "./components/Shared/NoDataSection";
import RequiredLoginSection from "./components/Shared/RequireLoginSection";

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, #ff6f61, #ffcc70);
  min-height: 100vh;
  color: #000;
  padding: 20px;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isLogin, logOut } = useAuth();

  const {
    user,
    error: userError,
    loading: userLoading,
  } = useSelector((state: UserReducer) => state.user);
  const {
    repositories,
    loading: repoLoading,
    error: repoError,
  } = useSelector((state: RepoReducer) => state.repository);
  const {
    organizations,
    loading: orgLoading,
    error: orgError,
  } = useSelector((state: OrganizationReducer) => state.organization);

  React.useEffect(() => {
    if (user?.login && !userError) {
      dispatch(requestRepos(user.login));
      dispatch(requestOrgs(user.login));
    }
  }, [user, userError, dispatch]);

  React.useEffect(() => {
    if (repoError?.message) message.error(repoError.message);
    if (orgError?.message) message.error(orgError.message);
    if (userError?.message) message.error(userError.message);
  }, [userError, repoError, orgError]);

  const renderContent = () => {
    if (isLogin) {
      if (userLoading || repoLoading || orgLoading) {
        return <Spin size="large" />;
      }

      if (user.login === undefined) {
        return <NoDataSection />;
      }

      return (
        <>
          <UserProfile profile={user} loading={userLoading} />
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
