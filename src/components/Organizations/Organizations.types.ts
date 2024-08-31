import { Organization } from "../../types";

export interface OrganizationCardProps {
    org: Organization;
}

export interface OrganizationsSectionProps {
    organizations: Organization[];
    loading: boolean;
}
