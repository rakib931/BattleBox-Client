import React from "react";
import { useState } from "react";
import AddReviewModal from "../../components/Modal/AddReviewModal";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const Reviews = () => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  function closeModal() {
    setIsModalOpen(false);
  }
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["participent-submition"],
    queryFn: async () => {
      const { data } = await axiosSecure("/get-review");
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  return (
    <div
      className=" rounded-2xl mb-8 shadow-sm max-w-6xl mx-auto text-center px-5 py-10"
    >
      <h2 className="text-2xl font-bold  mb-2">
        Review Participant Submissions
      </h2>

      <p className=" text-sm max-w-2xl">
        Carefully review each participant’s submission below. Check creativity,
        accuracy, and effort before declaring a winner. Remember, only{" "}
        <span className="font-semibold text-lime-500">one winner</span> can be
        selected for this contest.
      </p>
      <div className="mt-4"></div>

      <div className="mt-4 flex flex-wrap gap-3">
        <span className="bg-white text-indigo-600 text-xs font-medium px-3 py-1 rounded-full border">
          ✔ Fair Evaluation
        </span>
        <span className="bg-white text-indigo-600 text-xs font-medium px-3 py-1 rounded-full border">
          ✔ One Winner Only
        </span>
        <span className="bg-white text-indigo-600 text-xs font-medium px-3 py-1 rounded-full border">
          ✔ Quality Over Quantity
        </span>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition my-5"
      >
        Add Review
      </button>
      <AddReviewModal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                What Our Participants Say
              </h2>
              <p className=" mt-2 max-w-xl mx-auto">
                Honest feedback from creators and participants who joined our
                contests.
              </p>
            </div>

            {/* Review Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews?.map((review) => (
                <div
                  key={review?._id}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  <p className="text-gray-600 text-sm italic">
                    "{review?.review}"
                  </p>
                  <h4 className="mt-4 font-semibold text-gray-800">
                    {review?.name}
                  </h4>
                  <span className="text-xs text-yellow-500">★★★★★</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
