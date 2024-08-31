import React, { useMemo, useState } from "react";
import { Pagination, Spin, Typography } from "antd";
import * as RepoSectionStyles from "./RepositoriesSection.styles";
import { RepositoryCard } from "../RepositoriesCard/RepositoriesCard";
import { RepositoriesSectionProps } from "../Repositories.types";

const RepositoriesSection: React.FC<RepositoriesSectionProps> = ({
  repositories,
  loading,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = useMemo(
    () => repositories.slice(startIndex, endIndex),
    [repositories, startIndex, endIndex]
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return <Spin size="large" />;

  return (
    <RepoSectionStyles.Section>
      <RepoSectionStyles.SectionTitle>
        Repositories
      </RepoSectionStyles.SectionTitle>
      {repositories.length > 0 ? (
        <>
          <RepoSectionStyles.CardContainer>
            {currentItems.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </RepoSectionStyles.CardContainer>
          <RepoSectionStyles.PaginationContainer>
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={repositories.length}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </RepoSectionStyles.PaginationContainer>
        </>
      ) : (
        <Typography.Paragraph>No repositories found</Typography.Paragraph>
      )}
    </RepoSectionStyles.Section>
  );
};

export default RepositoriesSection;