import React from "react";
import { Trophy } from "lucide-react";

const WinnerCard = ({ winner }) => {
  return (
    <div
      key={winner?._id}
      className="relative bg-linear-to-br 
      p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 
      text-center overflow-hidden"
    >
      {/* Winner Badge */}
      <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">
        WINNER
      </span>

      {/* Trophy Icon */}
      <div className="absolute -top-6 -left-6  p-6 rounded-full opacity-20">
        <Trophy  size={48} />
      </div>

      {/* Image with gradient ring */}
      <div
        className="relative w-36 h-36 mx-auto rounded-full bg-linear-to-r 
      from-yellow-400 to-orange-400 p-1"
      >
        <img
          src={winner?.winnerImage}
          alt={winner?.winnerName}
          className="w-full h-full rounded-full object-cover bg-white"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold  mt-5">
        {winner?.winnerName}
      </h3>

      {/* Inspiring Text */}
      <p className="text-sm italic mt-2">
        “Success is earned through passion, creativity, and dedication.”
      </p>

      {/* Prize */}
      <div className="mt-4 bg-yellow-100 text-yellow-700 font-bold py-2 px-4 rounded-full inline-block">
        🏆 Prize Money: ${winner?.prize}
      </div>
    </div>
  );
};

export default WinnerCard;
