// import React, { useEffect } from "react";
import Card from "../../components/Home/Card";
import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { useState } from "react";
const AllContest = () => {
  // const { user } = useAuth();
  const [category, setCategory] = useState("");

  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["contests", category],
    queryFn: async () => {
      const url = category
        ? `${import.meta.env.VITE_API_URL}/approved-contest/${category}`
        : `${import.meta.env.VITE_API_URL}/approved-contest`;

      const { data } = await axios.get(url);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  console.log("from tanstack query", contests);
  return (
    <div className="min-h-screen  px-4 py-10">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">All Contests</h1>
        <p className=" mt-2">
          Explore and participate in exciting contests
        </p>
        <div className="flex gap-5 px-40 mt-5">
          <button
            onClick={() => setCategory("")}
            className="w-full p-3 text-white rounded bg-lime-500 hover:bg-lime-600 font-semibold"
          >
            All
          </button>
          <button
            onClick={() => setCategory("Graphic Design")}
            className="w-full p-3 text-white rounded bg-lime-500 hover:bg-lime-600 font-semibold"
          >
            Graphic Design
          </button>
          <button
            onClick={() => setCategory("Music")}
            className="w-full p-3 text-white rounded bg-lime-500 hover:bg-lime-600 font-semibold"
          >
            {" "}
            Music
          </button>
          <button
            onClick={() => setCategory("Photography")}
            className="w-full p-3 text-white rounded bg-lime-500 hover:bg-lime-600 font-semibold"
          >
            Photography
          </button>
          <button
            onClick={() => setCategory("Web Development")}
            className="w-full p-3 text-white rounded bg-lime-500 hover:bg-lime-600 font-semibold"
          >
            Web Development
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
