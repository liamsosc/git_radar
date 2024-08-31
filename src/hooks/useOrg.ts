import { useEffect } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";

import { OrganizationReducer } from "../types";

const useOrg = () => {
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

export default useOrg;