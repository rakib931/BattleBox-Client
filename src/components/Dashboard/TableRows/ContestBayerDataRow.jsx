import React from "react";
import { useState } from "react";
import WinnerModal from "../../Modal/WinnerModal";
import SeeSubmitionModal from "../../Modal/SeeSubmitionModal";
import Countdown from "../../../pages/ContestDetails/Countdown";

const ContestBayerDataRow = ({ task }) => {
  const [isOpen, SetIsOpen] = useState(false);
  function closeModal() {
    SetIsOpen(false);
  }
  const [isOpenWin, SetIsOpenWin] = useState(false);
  function closeModalWin() {
    SetIsOpenWin(false);
  }
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={task?.image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{task?.contestName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{task?.category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{task?.customerEmail}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => SetIsOpen(true)}
          className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight"
        >
          <span className="absolute cursor-pointer inset-0 bg-green-300 opacity-50 rounded-full"></span>
          <span className="relative cursor-pointer">See Submition</span>
        </button>
        <SeeSubmitionModal
          task={task?.submitedTask}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {/* {new Date(Date.now()) < new Date(task?.deadline) ? (
          <div className="flex flex-col items-center jus">
            <p>Deadline Running</p>
            <Countdown deadline={task?.deadline} />
          </div>
        ) : ( */}
          <button
            onClick={() => SetIsOpenWin(true)}
            className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight"
          >
            <span className="absolute cursor-pointer inset-0 bg-green-300 opacity-50 rounded-full"></span>
            <span className="relative cursor-pointer">Set Winner</span>
          </button>
        {/* )} */}
        <WinnerModal
          task={task}
          isOpenWin={isOpenWin}
          closeModalWin={closeModalWin}
        />
      </td>
    </tr>
  );
};

export default ContestBayerDataRow;
