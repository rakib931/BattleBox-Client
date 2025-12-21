import React from "react";

const Winner = ({ winner }) => {
  if (!winner) {
    return <p className="text-gray-500"></p>;
  }
console.log(winner);
  return (
    <div className="w-full max-w-sm mx-auto border rounded-lg shadow-md p-6 flex flex-col items-center my-5">
      <h2 className="text-2xl font-bold mb-4">Contest Winner</h2>
      <img
        src={winner.image}
        alt={winner.name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{winner.name}</h3>
      <p className="text-gray-500">{winner.contestName}</p>
      <p className="text-lg font-medium mt-2">Prize: $ {winner.prize}</p>
    </div>
  );
};

export default Winner;
