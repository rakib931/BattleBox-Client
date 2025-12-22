import { useState } from "react";

const Announcements = () => {
  const [announcements] = useState([
    {
      id: 1,
      title: "New Contest Launched 🎉",
      description:
        "A new web development contest has been launched. Participate now and showcase your skills.",
      date: "Dec 22, 2025",
    },
    {
      id: 2,
      title: "Submission Deadline Extended ⏰",
      description:
        "The submission deadline for the UI/UX contest has been extended by 3 days.",
      date: "Dec 20, 2025",
    },
    {
      id: 3,
      title: "Winners Announced 🏆",
      description:
        "Winners of the Graphic Design contest have been announced. Check the leaderboard for details.",
      date: "Dec 18, 2025",
    },
  ]);
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700 mb-3">
          Announcements
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest announcements, contest updates, and
          important notices from our platform.
        </p>
      </div>

      {/* Announcement List */}
      <div className="space-y-6">
        {announcements?.map((item) => (
          <div
            key={item.id}
            className="bg-white border shadow-sm rounded-2xl p-6 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
              <h2 className="text-xl font-semibold text-indigo-600">
                {item?.title}
              </h2>
              <span className="text-sm text-gray-500">{item?.date}</span>
            </div>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
