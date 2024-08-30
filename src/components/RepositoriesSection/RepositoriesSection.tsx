import React, { useState } from "react";
import { RepositoryCard } from "./RepositoriesCard";
import { Repository } from "../../types";
import { Pagination, Spin, Typography } from "antd";
import {
  CardContainer,
  PaginationContainer,
  Section,
  SectionTitle,
} from "./RepositoriesSection.styles";

interface RepositoriesSectionProps {
  repositories: Repository[];
  loading: boolean;
}
export const RepositoriesSection: React.FC<RepositoriesSectionProps> = ({
  repositories,
  loading,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = repositories.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return <Spin size="large" />;

  return (
    <Section>
      <SectionTitle>Repositories</SectionTitle>
      {repositories.length > 0 ? (
        <>
          <CardContainer>
            {currentItems.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </CardContainer>
          <PaginationContainer>
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={repositories.length}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </PaginationContainer>
        </>
      ) : (
        <Typography.Paragraph>No repositories found</Typography.Paragraph>
      )}
    </Section>
  );
};
