import { useEffect } from "react";
import { useSelector } from "react-redux";
import { OrganizationReducer } from "../types";
import { message } from "antd";

export const useOrg = () => {
  const { organizations, loading: orgLoading, error: orgError } = useSelector(
    (state: OrganizationReducer) => state.organization
  );

  useEffect(() => {
    if (orgError?.message) {
      message.error(orgError.message);
    }
  }, [orgError]);

  return { organizations, orgLoading, orgError };
};
