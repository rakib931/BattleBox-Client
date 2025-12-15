import { Link } from "react-router";
import Countdown from "../../pages/ContestDetails/Countdown";
// const deadline = "2025-12-31T23:59:00.000Z";
//                   2025-12-18T11:45:00.000Z
const Card = ({ contest }) => {
  // console.log(deadline)
  return (
    <Link
      to={`/contest/${contest?._id}`}
      className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
            src={contest?.image}
            alt="Plant Image"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          ></div>
        </div>
        <div className="font-semibold text-lg">{contest?.contestName}</div>
        <div className="font-semibold text-lg">
          Category: {contest?.category}
        </div>
        <div className="font-semibold text-lg">
          Participants: {contest?.participent}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold"> Price: {contest?.price}$</div>
        </div>
        <div>
          <Countdown deadline={contest?.deadline} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
