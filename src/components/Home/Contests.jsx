import Card from "./Card";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Link } from "react-router";

const Contests = () => {
  const { data: contests = [], isloading } = useQuery({
    queryKey: ["Winners for home"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/popular-contests`
      );
      return data;
    },
  });
  if (isloading) return <LoadingSpinner />;
  return (
    <Container>
      <h1 className="text-3xl font-bold text-center">Popular Contest</h1>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
        {contests.map((contest) => (
          <Card key={contest._id} contest={contest} />
        ))}
      </div>
      <div className="my-5 w-fit mx-auto">
        <Link
          to={"/all-contest"}
          className="bg-lime-500 px-3 py-2 rounded text-white font-semibold"
        >
          Show All
        </Link>
      </div>
    </Container>
  );
};

export default Contests;
