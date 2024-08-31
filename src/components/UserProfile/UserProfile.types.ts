import { User } from "../../types";

export interface ProfileProps {
  profile: User;
  loading: boolean;
}

export interface ProfileItemProps {
  icon: React.ReactNode;
  label: React.ReactNode;
}
