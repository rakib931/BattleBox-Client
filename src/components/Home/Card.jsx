import { Link } from "react-router";
import Countdown from "../../pages/ContestDetails/Countdown";

const Card = ({ contest }) => {
  return (
    <div className="col-span-1 shadow-xl rounded-xl overflow-hidden group">
      {/* IMAGE */}
      <div className=" h-56 overflow-hidden">
        <img
          src={contest?.image}
          alt={contest?.contestName}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        {/* CONTEST NAME */}
        <h3 className="text-lg font-semibold">{contest?.contestName}</h3>
        <h3 className="text-lg font-semibold">
          Participent : {contest?.participent}
        </h3>

        {/* CATEGORY */}
        <p className="text-sm text-gray-500">Category: {contest?.category}</p>

        {/* SHORT DESCRIPTION */}
        <p className="text-sm text-gray-600">
          {contest?.description?.slice(0, 60)}...
        </p>

        {/* COUNTDOWN */}
        <Countdown deadline={contest?.deadline} />

        {/* DETAILS BUTTON */}
        <Link
          to={`/contest/${contest?._id}`}
          className="block text-center mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
