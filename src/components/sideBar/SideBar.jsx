import {HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUser} from "react-icons/hi2"
import {NavLink} from "react-router"

const SideBar = () => {
  return (
    <nav>
      <NavLink>
        <li className="flex items-center gap-5">
          <HiOutlineCalendarDays />
          <span>Home</span>
        </li>

        <li className="flex items-center gap-5">
          <HiOutlineCalendarDays />
          <span>Home</span>
        </li>

        <li className="flex items-center gap-5">
          <HiOutlineCalendarDays />
          <span>Home</span>
        </li>
      </NavLink> 
      
    </nav>
  )
}

export default SideBar
