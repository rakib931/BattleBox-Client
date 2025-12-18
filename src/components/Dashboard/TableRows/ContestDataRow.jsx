import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdateContestModal from "../../Modal/UpdateContestModal";
import { Link } from "react-router";
// import WinnerModal from "../../Modal/WinnerModal";

const ContestDataRow = ({ contest, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const status = contest?.status;

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={contest?.image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{contest?.contestName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{contest?.category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">$ {contest?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">$ {contest?.prizeMoney}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{contest?.participent}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={openModal}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </span>
        <DeleteModal
          refetch={refetch}
          contest={contest}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={
            status === "approved" ? undefined : () => setIsEditModalOpen(true)
          }
          className={`relative inline-block px-3 py-1 font-semibold leading-tight
    ${
      status === "approved" || status === "rejected"
        ? "cursor-not-allowed text-gray-400"
        : "cursor-pointer text-green-900"
    }
  `}
        >
          <span
            aria-hidden="true"
            className={`absolute inset-0 rounded-full
      ${
        status === "approved" || status === "rejected"
          ? "bg-gray-300 opacity-40"
          : "bg-green-200 opacity-50"
      }
    `}
          ></span>

          <span className="relative">Update</span>
        </span>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <UpdateContestModal
          refetch={refetch}
          contest={contest}
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      </td>
    </tr>
  );
};

export default ContestDataRow;
