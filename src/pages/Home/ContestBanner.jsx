import { useState } from "react";
import Container from "../../components/Shared/Container";

const ContestBanner = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const sampleData = [
    { id: 1, title: "Web Development Contest" },
    { id: 2, title: "Graphic Design Challenge" },
    { id: 3, title: "Hackathon 2025" },
    { id: 4, title: "AI Bot Building Contest" },
  ];

  const handleSearch = () => {
    const filtered = sampleData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
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
              setQuery(e.target.value), handleSearch();
            }}
            className="w-full p-3 rounded-xl text-white focus:outline-none"
          />
          <button
            // onChange={handleSearch}
            // onClick={handleSearch}
            className="px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold shadow-md hover:shadow-lg"
          >
            Search
          </button>
        </div>

        {/* Results */}
        <div className="w-full max-w-xl mt-4 bg-white text-gray-900 rounded-xl p-4 shadow-lg space-y-2">
          {results.length === 0 ? (
            <p className="text-center opacity-70">
              No results yet. Try searching!
            </p>
          ) : (
            results.map((item) => (
              <div key={item.id} className="p-3 rounded-md bg-gray-100">
                {item.title}
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default ContestBanner;
