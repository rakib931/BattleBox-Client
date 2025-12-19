import React from "react";
import MyWiningDataRow from "../../../components/Dashboard/TableRows/MyWiningDataRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const MyWinningContests = () => {
  const axiosSecure = useAxiosSecure();
  const { data: wins = [], isLoading } = useQuery({
    queryKey: ["participent-submition"],
    queryFn: async () => {
      const { data } = await axiosSecure("/contest-winned");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
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
                    image
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Prize
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Contest Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Mark
                  </th>
                </tr>
              </thead>
              <tbody>
                {wins.map((win) => (
                  <MyWiningDataRow key={win?._id} win={win} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWinningContests;
