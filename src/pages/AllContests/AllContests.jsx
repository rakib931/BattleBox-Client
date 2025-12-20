import React from "react";
import Card from "../../components/Home/Card";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { useState } from "react";
const AllContest = () => {
  const { user } = useAuth();
  const [category, SetCategory] = useState();
  console.log(category);

  const {
    data: contests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contests", user?.email],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/approved-contest/${category}`
      );
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  console.log(contests);
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">All Contests</h1>
        <p className="text-gray-600 mt-2">
          Explore and participate in exciting contests
        </p>
        <div className="my-5">
          <button
            onClick={() => {
              SetCategory("Graphic Design"), refetch();
            }}
            className="btn btn-secondary mx-2"
          >
            Graphic Design
          </button>
          <button
            onClick={() => {
              SetCategory("Music"), refetch();
            }}
            className="btn btn-secondary mx-2"
          >
            {" "}
            Music
          </button>
          <button
            onClick={() => {
              SetCategory("Photography"), refetch();
            }}
            className="btn btn-secondary mx-2"
          >
            Photography
          </button>
        </div>
      </div>

      {/* Contest Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contests.map((contest) => (
          <Card key={contest._id} contest={contest} />
        ))}
      </div>
    </div>
  );
};

export default AllContest;
