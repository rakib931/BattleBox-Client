import React from "react";

const WinnerCard = ({ winner }) => {
  return (
    <div
      key={winner?._id}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
    >
      <img
        src={winner?.winnerImage}
        alt={winner?.winnerName}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold mt-4">{winner?.winnerName}</h3>
      <p className="text-lg text-yellow-600 font-bold">
        Prize Money : ${winner?.prize}
      </p>
    </div>
  );
};

export default WinnerCard;
