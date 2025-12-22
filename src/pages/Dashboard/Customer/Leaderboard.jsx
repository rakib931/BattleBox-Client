import React, { useState } from "react";
import LeaderBoardRow from "../../../components/Dashboard/TableRows/LeaderBoardRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;

  const axiosSecure = useAxiosSecure();
  const { isLoading } = useQuery({
    queryKey: ["leaderboard-users", currentPage],
    queryFn: async () => {
      const res = await axiosSecure(
        `/leaderboard-users?limit=${limit}&skip=${currentPage * limit}`
      );
      setTotalUsers(res?.data?.total);
      setUsers(res?.data?.users);
      const page = Math.ceil(res?.data?.total / limit);
      setTotalPage(page); 
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  console.log(totalUsers, users);
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Contest Win
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <LeaderBoardRow key={user?._id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center flex-wrap gap-5 py-5">
            {[...Array(totalPage).keys()].map((i) => (
              <button onClick={() => setCurrentPage(i)} className="btn">
                {i}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
