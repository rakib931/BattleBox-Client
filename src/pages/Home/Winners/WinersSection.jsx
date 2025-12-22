import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import WinnerCard from "./WinnerCard";

const WinnersSection = () => {
  
  const { data: winners = [], isloading } = useQuery({
    queryKey: ["Winners"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/winners`);
      return data;
    },
  });
  if (isloading) return <LoadingSpinner />;
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold">🏆 Contest Winners</h2>
        <p className=" mt-2">
          Here are the top performers from the recent contest
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {winners.map((winner) => (
            <WinnerCard key={winner._id} winner={winner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
