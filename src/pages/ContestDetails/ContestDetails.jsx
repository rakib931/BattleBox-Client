import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import Button from "../../components/Shared/Button/Button";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import Countdown from "./Countdown";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Winner from "./Winner";

const ContestDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const { data: contest = {}, isPending } = useQuery({
    queryKey: ["contest", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/contests/${id}`);
      return data;
    },
  });

  if (isPending) return <LoadingSpinner />;
  return (
    <Container>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12">
        {/* Header */}
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <div className="w-full overflow-hidden rounded-xl">
              <img
                className="object-cover w-full"
                src={contest?.image}
                alt="header image"
              />
            </div>
          </div>
          {/* Winner section  */}
          <Winner winner={contest?.winner} />
        </div>
        <div className="md:gap-10 flex-1">
          {/* Plant Info */}
          <Heading
            title={contest?.contestName}
            subtitle={`Category: ${contest?.category}`}
          />
          <hr className="my-6" />
          <div
            className="
          text-lg font-light text-neutral-500"
          >
            <span className="font-semibold">Description: </span>
            {contest?.description}
          </div>
          <hr className="my-6" />
          <div
            className="
          text-lg font-light text-neutral-500"
          >
            <span className="font-semibold">Instraction: </span>
            {contest?.instruction}
          </div>
          <hr className="my-6" />

          <div className="flex justify-between">
            <div>
              <Countdown deadline={contest?.deadline} />
            </div>
            <p className="text-2xl font-bold">
              Prize Money <span>{contest?.prizeMoney}$</span>
            </p>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between">
            <p className="font-bold text-3xl text-gray-500">
              Price: {contest?.price}$
            </p>
            {new Date(Date.now()) < new Date(contest?.deadline) ? (
              <div>
                <Button onClick={() => setIsOpen(true)} label="Purchase" />
              </div>
            ) : (
              <p className="text-red-500 text-xl font-semibold">
                Contest ended
              </p>
            )}
          </div>
          <hr className="my-6" />

          <PurchaseModal
            contest={contest}
            closeModal={closeModal}
            isOpen={isOpen}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContestDetails;
