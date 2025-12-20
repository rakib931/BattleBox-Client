import Card from "./Card";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";

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
  console.log(contests);
  if (isloading) return <LoadingSpinner />;
  return (
    <Container>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
        {contests.map((contest) => (
          <Card key={contest._id} contest={contest} />
        ))}
      </div>
    </Container>
  );
};

export default Contests;
