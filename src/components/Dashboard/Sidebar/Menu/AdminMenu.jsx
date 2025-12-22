import { FaUserClock, FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { MdOutlineManageHistory } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem
        icon={FaUserClock}
        label="Contest Creator Request"
        address="creator-request"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Pending Contest"
        address="manage-contest"
      />
      <MenuItem
        icon={TfiAnnouncement}
        label="Announcement"
        address="/announcements"
      />
    </>
  );
};

export default AdminMenu;
