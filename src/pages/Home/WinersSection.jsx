import React from "react";

const WinnersSection = () => {
  const winners = [
    {
      id: 1,
      name: "Rakib Hossain",
      position: "1st Place",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jhon Doe",
      position: "2nd Place",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sarah Khan",
      position: "3rd Place",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">🏆 Contest Winners</h2>
        <p className="text-gray-500 mt-2">
          Here are the top performers from the recent contest
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {winners.map((winner) => (
            <div
              key={winner.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={winner.image}
                alt={winner.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{winner.name}</h3>
              <p className="text-lg text-yellow-600 font-bold">
                {winner.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
