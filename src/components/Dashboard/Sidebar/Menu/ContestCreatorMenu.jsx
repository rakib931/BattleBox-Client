import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
import { SiGoogletasks } from "react-icons/si";

const ContestCreatorMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Contest"
        address="add-contest"
      />
      <MenuItem
        icon={MdHomeWork}
        label="My Created Contests"
        address="created-contests"
      />
    </>
  );
};

export default ContestCreatorMenu;
