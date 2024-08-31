import { Repository } from "../../types";

export interface RepositoryCardProps {
  repo: Repository;
}

export interface RepositoriesSectionProps {
  repositories: Repository[];
  loading: boolean;
}
