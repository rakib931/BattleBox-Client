import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { GoFileSubmodule } from "react-icons/go";
import MenuItem from "./MenuItem";
import { useState } from "react";
import ContestCreatorModal from "../../../Modal/ContestCreatorModal";
const ParticipentMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="Contest Participated"
        address="participated"
      />

      <MenuItem
        icon={GoFileSubmodule}
        label="My Submition"
        address="my-submition"
      />
      <MenuItem
        icon={GoFileSubmodule}
        label="My Winning Contests"
        address="my-wining-contests"
      />
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
      >
        <GrUserAdmin className="w-5 h-5" />

        <span className="mx-4 font-medium">Become A Contest Creator</span>
      </div>

      <ContestCreatorModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default ParticipentMenu;
