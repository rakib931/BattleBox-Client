import React from "react";
import Card from "../../components/Home/Card";

const contests = [
  {
    id: 1,
    title: "Web Design Challenge",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    description: "Show your creativity by designing a modern website UI.",
    prize: "$100",
    deadline: "20 Dec 2025",
  },
  {
    id: 2,
    title: "React Coding Contest",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description: "Build a React app and win exciting prizes.",
    prize: "$150",
    deadline: "25 Dec 2025",
  },
  {
    id: 3,
    title: "Logo Design Contest",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Design a unique logo for a startup brand.",
    prize: "$80",
    deadline: "18 Dec 2025",
  },
];

const AllContest = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">All Contests</h1>
        <p className="text-gray-600 mt-2">
          Explore and participate in exciting contests
        </p>
      </div>

      {/* Contest Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {contests.map((contest) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default AllContest;
