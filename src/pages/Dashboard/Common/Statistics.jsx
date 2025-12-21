import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import ContestCreatorStatistics from "../../../components/Dashboard/Statistics/ContestCreatorStatistics";
import CustomerStatistics from "../../../components/Dashboard/Statistics/CustomerStatistics";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";

const Statistics = () => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <LoadingSpinner />;
  return (
    <div>
      {role === "participent" && <CustomerStatistics />}
      {role === "creator" && <ContestCreatorStatistics />}
      {role === "admin" && <AdminStatistics />}
    </div>
  );
};

export default Statistics;
