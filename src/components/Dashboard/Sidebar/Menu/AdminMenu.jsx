import { FaUserClock, FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={FaUserClock} label='Creator Request' address='creator-request' />
    </>
  )
}

export default AdminMenu
