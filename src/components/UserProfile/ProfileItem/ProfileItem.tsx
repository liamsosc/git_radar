import { ProfileItemProps } from "../UserProfile.types";
import * as ProfileItemStyles from "./ProfileItem.styles";

export const ProfileItem: React.FC<ProfileItemProps> = ({
    icon,
    label,
  }) => (
    <ProfileItemStyles.InfoItem>
      <ProfileItemStyles.InfoIcon>{icon}</ProfileItemStyles.InfoIcon>
      <span>{label}</span>
    </ProfileItemStyles.InfoItem>
  );