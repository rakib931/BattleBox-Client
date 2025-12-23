import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import Button from "../../components/Shared/Button/Button";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import Countdown from "./Countdown";
import { useParams, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Winner from "./Winner";
import { useEffect } from "react";
import axios from "axios";
import TaskSubmitModal from "../../components/Modal/TaskSubmitModal";
import useAuth from "../../hooks/useAuth";

const ContestDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenSub, setIsOpenSub] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const closeModalSub = () => {
    setIsOpenSub(false);
  };
  // get data for page and is isPaid
  const {
    data = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["contest", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/contest/${id}`);
      return res.data;
    },
  });
  const { contest, isPaid } = data;

  // add data in orders collection
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    if (sessionId) {
      axios.post(`${import.meta.env.VITE_API_URL}/payments-success`, {
        sessionId,
      });
    }
    setTimeout(refetch,1500)
  }, [sessionId, refetch]);
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

          <p className="text-lg font-light text-neutral-500">
            {" "}
            <span className="font-semibold"> Description : </span>
            {contest?.description}
          </p>

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
            <div className="">
              <p className="font-bold text-3xl text-gray-500">
                Price: {contest?.price}$
              </p>
              <p className="font-semibold text-3xl text-gray-500">
                Participent: {contest?.participent}
              </p>
            </div>
            {isPaid ? (
              <p className="font-semibold text-red-500">
                You AllReady Purchased <br /> Please Submit Your Task
              </p>
            ) : new Date(Date.now()) < new Date(contest?.deadline) ? (
              <div>
                <Button onClick={() => setIsOpen(true)} label="Purchase" />
              </div>
            ) : (
              <p className="text-red-500 text-xl font-semibold">
                Contest ended
              </p>
            )}
          </div>

          <hr className="mt-6" />
          <div className="mb-2">
            {isPaid ? (
              <div>
                <p className="pb-3 font-semibold text-center">
                  Please Submit your Task
                </p>
                <Button label={"Submit"} onClick={() => setIsOpenSub(true)} />
              </div>
            ) : (
              ""
            )}
            <TaskSubmitModal
              contest={contest}
              isOpenSub={isOpenSub}
              closeModalSub={closeModalSub}
            />
          </div>

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
