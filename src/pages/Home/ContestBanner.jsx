import { useState } from "react";
import Container from "../../components/Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "../../components/Home/Card";
import BannerCard from "./BannerCard";

const ContestBanner = () => {
  const [query, setQuery] = useState("");
  const {
    data: contests = [],
    isloading,
    refetch,
  } = useQuery({
    queryKey: ["contests for banner", query],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/banner-contest/${query}`
      );
      return data;
    },
  });
  console.log(contests);
  if (isloading) return <LoadingSpinner />;

  const handleSearch = () => {
    console.log("hello");
  };

  return (
    <Container>
      <div className="w-full bg-indigo-700 text-white py-20 px-6 flex flex-col items-center gap-6 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-center">
          Find Your Next Contest
        </h1>
        <p className="text-center max-w-xl opacity-90">
          Search contests, challenges and competitions instantly.
        </p>

        {/* Search Box */}
        <div className="flex gap-3 w-full max-w-xl">
          <input
            type="text"
            placeholder="Search contests..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value), refetch();
            }}
            className="w-full p-3 rounded-xl text-white focus:outline-none"
          />
          <button
            // onChange={handleSearch}
            onClick={handleSearch}
            className="px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold shadow-md hover:shadow-lg"
          >
            Search
          </button>
        </div>

        {/* Results */}
        <div className="w-full  mt-4 bg-white text-gray-900 rounded-xl p-4 shadow-lg space-y-2">
          {contests.length === 0 ? (
            <p className="text-center opacity-70">
              No results yet. Try searching!
            </p>
          ) : (
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
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal hidden md:block"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                          >
                            Set Winner
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {contests.map((item) => (
                          <BannerCard key={item?._id} item={item} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ContestBanner;
