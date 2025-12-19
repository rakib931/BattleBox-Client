import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const WinnersSection = () => {
  const { data: winners = [], isloading } = useQuery({
    queryKey: ["Winners for home"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/winners`);
      return data;
    },
  });
  if (isloading) return <LoadingSpinner />;
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">🏆 Contest Winners</h2>
        <p className="text-gray-500 mt-2">
          Here are the top performers from the recent contest
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {winners.map((winner) => (
            <div
              key={winner?._id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={winner?.winnerImage}
                alt={winner?.winnerName}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">
                {winner?.winnerName}
              </h3>
              <p className="text-lg text-yellow-600 font-bold">
                Prize Money : ${winner?.prize}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
