import React from "react";
import { Link } from "react-router";

const BannerCard = ({ item }) => {
  return (
    <tr>
      <td className="px-5 py-5  bg-white text-sm">
        <div className="flex items-center">
          <div className="shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={item?.image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>

      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900">{item?.contestName}</p>
      </td>

      <td className="px-5 py-5  bg-white text-sm hidden md:block">
        <p className="text-gray-900">{item?.category}</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <Link
          to={`/contest/${item?._id}`}
          className="px-3 py-2 bg-lime-500 rounded"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default BannerCard;
