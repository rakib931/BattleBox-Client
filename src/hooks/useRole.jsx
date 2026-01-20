import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useRole = () => {
  const { user, loading } = useAuth();
  // const axiosSecure = useAxiosSecure();

  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axios(`/user/role?email=${user?.email}`);
      return data?.role;
    },
  });
  return [role, isRoleLoading];
};

export default useRole;
