import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
const ContestCreatorMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Contest"
        address="add-contest"
      />
      <MenuItem icon={MdHomeWork} label="My Inventory" address="my-inventory" />
    </>
  );
};

export default ContestCreatorMenu;
