import { useState } from "react";
import UpdateContestStatusModal from "../../Modal/UpdateContestStatusModal";
import AdminDeleteModal from "../../Modal/AdminDeleteModal";
const PendingContestDataRow = ({ contest, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenDelete, setIsOpenDelete] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{contest?.contestName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">$ {contest?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">Prize: $ {contest?.prizeMoney}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{contest?.status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center gap-2">
          <UpdateContestStatusModal
            refetch={refetch}
            contest={contest}
            isOpen={isOpen}
            closeModal={closeModal}
          />
          <button
            className="btn btn-sm bg-green-300 rounded-full font-bold"
            onClick={() => setIsOpen(true)}
          >
            update
          </button>
          <button
            onClick={() => setIsOpenDelete(true)}
            className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Delete</span>
          </button>
        </div>
        <AdminDeleteModal
          refetch={refetch}
          contest={contest}
          isOpenDelete={isOpenDelete}
          setIsOpenDelete={setIsOpenDelete}
          closeModal={closeModal}
        />
      </td>
    </tr>
  );
};

export default PendingContestDataRow;
